/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import Card from './Card';

const Feed = (props) => {
  const { articles, viewFunc } = props;

  const articlesArr = [
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Kara Fox, CNN Business',
      title: 'Renewables are being installed at top speed -- but still far too slow to fix the planet, energy watchdog says - CNN',
      description: 'The International Energy Agency reports renewable energy growth is set to hit an all-time record this year.',
      url: 'https://www.cnn.com/2021/12/01/business/renewable-energy-growth-iea-report-climate-intl/index.html',
      urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/211130162043-01-renewable-energy-growth-china-111621-super-tease.jpg',
      publishedAt: '2021-12-01T06:05:00Z',
      content: '(CNN Business)Growth in renewable energy is set to hit an all-time record this year, but is still falling "well short" of what is necessary to slash planet-warming emissions, according to the Interna… [+3217 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: 'Asian shares bounce from year low but Omicron, Fed in focus - Reuters',
      description: "Asian stocks rose from a one-year low on Wednesday as U.S. share futures and oil recovered from the previous day's selloff, but uncertainty over the impact of the Omicron coronavirus variant kept investors on edge.",
      url: 'https://www.reuters.com/markets/europe/global-markets-wrapup-1-2021-12-01/',
      urlToImage: 'https://www.reuters.com/resizer/HyM36Bpt106QuPPxXsduL4dYiHo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y5UKWSMDU5PGPF7SJS6O4OOL4A.jpg',
      publishedAt: '2021-12-01T05:51:00Z',
      content: "HONG KONG, Dec 1 (Reuters) - Asian stocks rose from a one-year low on Wednesday as U.S. share futures and oil recovered from the previous day's selloff, but uncertainty over the impact of the Omicron… [+3241 chars]",
    },
    {
      source: {
        id: null,
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: 'Elon Musk jokes about whistleblowers with new Tesla product - BBC News',
      description: 'In recent months, Tesla has faced lawsuits over alleged sexual harassment and racist abuse.',
      url: 'https://www.bbc.com/news/business-59486455',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/C235/production/_121571794_gettyimages-1211441837.jpg',
      publishedAt: '2021-12-01T03:53:01Z',
      content: "Elon Musk has made an apparent joke about whistleblowers as he promoted the latest piece of Tesla-branded merchandise.\r\nMr Musk's tweet to his 65.1m followers said \"Blow the whistle on Tesla!\" with a… [+2075 chars]",
    },
    {
      source: {
        id: null,
        name: 'Fox Business',
      },
      author: 'Reuters',
      title: "Cathie Wood's ARK buys a million Twitter shares after Dorsey steps down - Fox Business",
      description: '',
      url: 'https://www.foxbusiness.com/markets/cathie-woods-ark-buys-a-million-twitter-shares-after-dorsey-steps-down',
      urlToImage: 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/11/0/0/Cathir-Wood-ARK-2.jpg?ve=1&tl=1',
      publishedAt: '2021-12-01T03:52:14Z',
      content: "Cathie Wood's ARK Investment Management bought more than a million shares of Twitter Inc, a day after Jack Dorsey stepped down as the chief executive of the social networking site.\r\nGET FOX BUSINESS … [+876 chars]",
    },
    {
      source: {
        id: null,
        name: 'Cointelegraph',
      },
      author: 'Martin Young',
      title: 'Bitcoin correction weakest of 2021 so far, as hopes of Santa Claus rally rise - Cointelegraph',
      description: 'Bitcoin has declined 17% from its peak price but hopes are growing for an end-of-year Santa Claus rally.',
      url: 'https://cointelegraph.com/news/bitcoin-correction-weakest-of-2021-so-far-as-hopes-of-santa-claus-rally-rise',
      urlToImage: 'https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTIvZTRhMThiYjItOWY2Mi00NDFkLWFlNWUtZGI5MjQxOWFmZGFkLmpwZw==.jpg',
      publishedAt: '2021-12-01T03:48:42Z',
      content: 'In previous bull market cycles, there has been a measurable correction before a rally at the end of the year and if history rhymes it could be on the cards again.\r\nWeve certainly experienced the corr… [+3434 chars]',
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      author: null,
      title: '10 Most Expensive Cities in the World: Tel Aviv Tops Cost of Living List - Bloomberg',
      description: null,
      url: 'https://www.bloomberg.com/tosv2.html?vid=&uuid=ad15cc50-5284-11ec-aec4-4f5274647155&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0xMi0wMS9jb3N0LW9mLWxpdmluZy10ZWwtYXZpdi1wYXJpcy1zaW5nYXBvcmUtYXJlLXdvcmxkLXMtbW9zdC1leHBlbnNpdmUtY2l0aWVz',
      urlToImage: null,
      publishedAt: '2021-12-01T03:45:00Z',
      content: "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: {
        id: null,
        name: 'MarketWatch',
      },
      author: 'Aaron Tilley',
      title: 'CEO Satya Nadella sells about half of his Microsoft shares - MarketWatch',
      description: 'Last week’s transaction yielded more than $285 million for Nadella',
      url: 'https://www.marketwatch.com/story/ceo-satya-nadella-sells-about-half-of-his-microsoft-shares-11638329781',
      urlToImage: 'https://images.mktw.net/im-291170/social',
      publishedAt: '2021-12-01T03:36:00Z',
      content: 'Microsoft Corp. \r\n MSFT,\r\n -1.79%\r\n Chief Executive Satya Nadella sold about half of his shares in the company last week, according to a federal securities filing.\r\nIn the filing last week with the U… [+171 chars]',
    },
    {
      source: {
        id: null,
        name: 'New York Post',
      },
      author: 'Emily Crane',
      title: 'South Carolina woman gets $10 million after stepping on rusty nail at Walmart - New York Post',
      description: 'A South Carolina woman has been awarded $10 million by a jury for injuries sustained after stepping on a rusty nail at Walmart.',
      url: 'https://nypost.com/2021/11/30/april-jones-gets-10-million-after-stepping-on-rusty-nail-at-south-carolina-walmart/',
      urlToImage: 'https://nypost.com/wp-content/uploads/sites/2/2021/11/walmart-nail.jpg?quality=90&strip=all&w=1024',
      publishedAt: '2021-12-01T03:29:00Z',
      content: 'A South Carolina woman has been awarded $10 million by a jury for injuries sustained after stepping on a rusty nail at Walmart. \r\nApril Jones sued Walmart after she was injured shopping in a main ais… [+1131 chars]',
    },
    {
      source: {
        id: null,
        name: 'New York Daily News',
      },
      author: 'Theresa Braine',
      title: 'Daystar founder and COVID denier Marcus Lamb dies of COVID - New York Daily News',
      description: 'Yet another prominent evangelical Christian who proselytized against vaccines has died after being hospitalized with COVID.',
      url: 'https://www.nydailynews.com/coronavirus/ny-covid-marcus-lamb-founder-daystar-christian-evangelical-dead-64-anti-vaccine-20211201-w33t24p7hner7mmze2af3nk3vy-story.html',
      urlToImage: 'https://www.nydailynews.com/resizer/EJxkdoEoG3Xms-xqG1gP3zjS6qE=/1200x0/center/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/GQVNDI44CBEELFSKBJXS65FEL4.jpg',
      publishedAt: '2021-12-01T02:56:00Z',
      content: 'Yet another prominent evangelical Christian who proselytized against vaccines has died after being hospitalized with COVID.\r\nMarcus Lamb, founder and CEO of Daystar Television, was 64.\r\nThis morning … [+2861 chars]',
    },
    {
      source: {
        id: null,
        name: 'Benzinga',
      },
      author: null,
      title: 'Key Facebook Executive Behind Digital Currency And Wallet Project To Depart Company This Month - Benzinga - Benzinga',
      description: 'David Marcus, the co-creator of Facebook Inc’s (NASDAQ:',
      url: 'https://www.benzinga.com/markets/cryptocurrency/21/11/24373970/key-facebook-executive-behind-digital-currency-and-wallet-project-to-depart-company-this-m',
      urlToImage: 'https://cdn2.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/david_marcus.jpg?width=720',
      publishedAt: '2021-12-01T02:39:00Z',
      content: 'David Marcus, the co-creator of Facebook Inc’s (NASDAQ:FB) digital currency project Diem, is leaving the company at the end of December.\r\nWhat Happened: Marcus, who led Facebook’s cryptocurrency wall… [+2304 chars]',
    },
    {
      source: {
        id: null,
        name: 'NPR',
      },
      author: 'Will Stone',
      title: 'Some Teenagers Under 18 Could Soon Get A Pfizer COVID-19 Booster Shot : Shots - Health News - NPR',
      description: "Pfizer's CEO says the vaccine maker has asked federal regulators to authorize boosters for 16- and 17-year-olds. Currently, only people 18 and over are eligible for a booster in the U.S.",
      url: 'https://www.npr.org/sections/health-shots/2021/11/30/1060281550/pfizer-fda-covid-booster-16-and-17-year-olds',
      urlToImage: 'https://media.npr.org/assets/img/2021/11/30/teen-ap-pfizer-shot_wide-f05a8a5ea64eeb9be0a64aca76382002a492c5d1.jpg?s=1400',
      publishedAt: '2021-12-01T01:58:34Z',
      content: 'Keidy Ventura, 17, receives her first dose of the Pfizer COVID-19 vaccine in West New York, N.J. Pfizer has asked federal regulators to expand the eligibility for booster shots to include 16- and 17-… [+1426 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Mercury News',
      },
      author: 'Ethan Baron',
      title: 'Elizabeth Holmes trial: Theranos founder gruff, and emotional, under cross-examination - The Mercury News',
      description: 'The word ‘love’ appeared nearly 600 times in more than 12,000 messages Elizabeth Holmes and former Theranos president Sunny Balwani exchanged over five years, the prosecution said.',
      url: 'https://www.mercurynews.com/2021/11/30/elizabeth-holmes-trial-theranos-founder-gruff-and-emotional-under-cross-examination/',
      urlToImage: 'https://www.mercurynews.com/wp-content/uploads/2021/11/SJM-L-THERANOS-11XX-1.jpg?w=1024&h=692',
      publishedAt: '2021-12-01T01:55:19Z',
      content: 'Separated by 10 feet and a see-through, anti-COVID barrier, Elizabeth Holmes faced off against federal prosecutor Robert Leach for six hours Tuesday as Leach sought to highlight her alleged lies abou… [+5219 chars]',
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'AP',
      title: 'FDA panel backs first-of-a-kind Covid-19 pill from Merck - Times of India',
      description: 'US News: WASHINGTON: A panel of US health advisers narrowly backed the benefits of a closely watched COVID-19 pill from Merck, setting the stage for a likely a.',
      url: 'https://timesofindia.indiatimes.com/world/us/fda-panel-backs-first-of-a-kind-covid-19-pill-from-merck/articleshow/88019786.cms',
      urlToImage: 'https://static.toiimg.com/thumb/msid-88019781,width-1070,height-580,imgsize-13022,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2021-12-01T01:54:00Z',
      content: 'FDA panel backs first-of-a-kind Covid-19 pill from Merck',
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title: "PayPal CEO says use of 'buy now, pay later' option soared nearly 400% on Black Friday - CNBC Television",
      description: "PayPal CEO Dan Schulman appeared on Tuesday's episode of \"Mad Money.\"",
      url: 'https://www.youtube.com/watch?v=p7gafp76GqI',
      urlToImage: 'https://i.ytimg.com/vi/p7gafp76GqI/maxresdefault.jpg',
      publishedAt: '2021-12-01T01:36:58Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title: "Cramer's lightning round: You can buy a little Delta Air Lines now - CNBC Television",
      description: "\"Mad Money\" host Jim Cramer answers callers' stock questions at rapid speed during Tuesday's edition of the lightning round.",
      url: 'https://www.youtube.com/watch?v=Iznz_wNMXKk',
      urlToImage: 'https://i.ytimg.com/vi/Iznz_wNMXKk/maxresdefault.jpg',
      publishedAt: '2021-12-01T00:45:32Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'STLtoday.com',
      },
      author: 'Bryce Gray',
      title: 'Spire rate increases to raise gas bills by nearly 25% for regional customers - STLtoday.com',
      description: 'Typical residential customers in eastern Missouri are set to see their average monthly bills increase by about $14.52, according to Spire.',
      url: 'https://www.stltoday.com/business/local/spire-rate-increases-to-raise-gas-bills-by-nearly-25-for-regional-customers/article_fec27223-4972-5836-94cb-8f285514a112.html',
      urlToImage: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/51/c517729b-b082-5d10-a17e-143f9a403887/618e5f02cdf4e.image.jpg?crop=1800%2C945%2C0%2C103&resize=1200%2C630&order=crop%2Cresize',
      publishedAt: '2021-12-01T00:45:00Z',
      content: 'ST. LOUIS Costs from last winters extreme cold spell are finally hitting Spire natural gas bills, which, starting Tuesday, will see significant increases.\r\nTypical residential customers in eastern Mi… [+1347 chars]',
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title: "Jim Cramer's investment advice after Tuesday's broad market declines - CNBC Television",
      description: "\"Mad Money\" host Jim Cramer weighed in on Tuesday's stock market action, which saw the Dow Jones Industrial Average fall by 652 points as investors weighed t...",
      url: 'https://www.youtube.com/watch?v=YYpPS8ZjwQ0',
      urlToImage: 'https://i.ytimg.com/vi/YYpPS8ZjwQ0/maxresdefault.jpg',
      publishedAt: '2021-12-01T00:33:29Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Kotaku',
      },
      author: 'Luke Plunkett',
      title: 'Democrats Announce Bill Aimed At Stopping Bots From Buying All Your Consoles & Graphics Cards - Kotaku',
      description: "It's a nice idea in theory, but implementing change is a whole different story",
      url: 'https://kotaku.com/democrats-announce-bill-aimed-at-stopping-bots-from-buy-1848139881',
      urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5be8350103861283e013cf6a3f31b21e.jpg',
      publishedAt: '2021-11-30T23:55:00Z',
      content: 'A group of Democrats are introducing the Stopping Grinch Bots Act, a proposal with an incredibly stupid name that is aimed at preventing (or at least curtailing) the use of bots to snatch up stocks o… [+3135 chars]',
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      author: null,
      title: "Jerome Powell Ditches 'Transitory' Tag, Paves Way for Rate Hike - Bloomberg",
      description: null,
      url: 'https://www.bloomberg.com/tosv2.html?vid=&uuid=ac8b03cb-5284-11ec-bdb4-726658516961&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0xMS0zMC9wb3dlbGwtZGl0Y2hlcy10cmFuc2l0b3J5LWluZmxhdGlvbi10YWctcGF2ZXMtd2F5LWZvci1yYXRlLWhpa2U=',
      urlToImage: null,
      publishedAt: '2021-11-30T23:53:21Z',
      content: "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: {
        id: null,
        name: 'FX Empire',
      },
      author: null,
      title: 'Natural Gas Price Forecast - Natural Gas Breaks Trend - FX Empire',
      description: 'Natural gas markets have collapsed on warmer than usual temperatures in the United States, as it looks like the trend is trying to come to an end.',
      url: 'https://www.fxempire.com/forecasts/article/natural-gas-price-forecast-natural-gas-breaks-trend-825430',
      urlToImage: 'https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2021/08/z5natgas.jpg',
      publishedAt: '2021-11-30T23:52:59Z',
      content: 'Natural gas markets have collapsed during trading on Tuesday as we have broken significantly below the crucial $4.75 level. At this point, I believe that the trend for the winter is over, and we are … [+839 chars]',
    },
  ];

  const dateConverter = (date) => {
    const convertedDate = new Date(date);
    return convertedDate.toLocaleDateString('en-GB');
  };

  const toTheTop = () => {
    window.scrollTo(0, 0);
  };

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,
  };

  const bigScreen = useMediaQuery({
    query: '(min-width: 1080px)',
  });

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    viewFunc(inView);
  }, [inView]);

  return (
    <div className="feed">
      {bigScreen && (
      <div className="title-div">
        <Link to="/" className="no-style"><h1 ref={ref}>NewsLetter</h1></Link>
        <hr />
      </div>
      )}

      <Masonry className="masonry" breakpointCols={breakpointColumnsObj} columnClassName="masonry-column">
        {articles.map((article) => (
          <Card
            key={`${article.urlToImage}${article.title}`}
            title={article.title}
            description={article.description}
            image={article.urlToImage}
            url={article.url}
            date={dateConverter(article.publishedAt)}
            author={article.author}
          />
        ))}
      </Masonry>
      {!inView && <button type="button" className="to-top-btn" onClick={toTheTop} aria-label="to-top"><FontAwesomeIcon icon="arrow-up" /></button>}
    </div>

  );
};

Feed.propTypes = {
  articles: PropTypes.array.isRequired,
  viewFunc: PropTypes.func.isRequired,
};
export default Feed;
