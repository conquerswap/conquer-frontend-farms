import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.conquerswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.conquerswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xA9AD102640fbcf9E177c647335130be39652006e',
      },
      /**
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/conquer-swap/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/conquer-swap',
      },
      */
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/conquerswap/",
      },
      {
        label: "Docs",
        href: "https://conquerswap.gitbook.io/conquer-swap/",
      },
      /**
      {
        label: "Blog",
        href: "https://conquer-swap.medium.com/",
      },
      */
    ],
  },
  /**
  {
    label: 'Audit by Hacken',
    icon: 'HelmetIcon',
    href: 'https://www.conquerswap.finance/files/conquerHackenAudit.pdf',
  },
  */
]

export default config
