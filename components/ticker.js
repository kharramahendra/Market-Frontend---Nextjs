
import Head from 'next/head';
import Script from 'next/script';
const Ticker = () => {

    return <>

        <Head>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>

                {`{"symbols": [
                        {
                            "proName": "FOREXCOM:SPXUSD",
                            "title": "S&P 500"
                        },
                        {
                            "proName": "FOREXCOM:NSXUSD",
                            "title": "US 100"
                        },
                        {
                            "proName": "FX_IDC:EURUSD",
                            "title": "EUR/USD"
                        },
                        {
                            "proName": "BITSTAMP:BTCUSD",
                            "title": "Bitcoin"
                        },
                        {
                            "proName": "BITSTAMP:ETHUSD",
                            "title": "Ethereum"
                        }
                    ],
                    "colorTheme": "light",
                    "isTransparent": false,
                    "showSymbolLogo": true,
                    "locale": "in"
}`}
            </script>
        </Head>
        <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Markets today</span></a> by TradingView</div>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "symbols": [
                    {
                        "proName": "FOREXCOM:SPXUSD",
                    "title": "S&P 500"
                            },
                    {
                        "proName": "FOREXCOM:NSXUSD",
                    "title": "US 100"
                            },
                    {
                        "proName": "FX_IDC:EURUSD",
                    "title": "EUR/USD"
                            },
                    {
                        "proName": "BITSTAMP:BTCUSD",
                    "title": "Bitcoin"
                            },
                    {
                        "proName": "BITSTAMP:ETHUSD",
                    "title": "Ethereum"
                            }
                    ],
                    "colorTheme": "light",
                    "isTransparent": false,
                    "showSymbolLogo": true,
                    "locale": "in"
                    }`,
                }}

                {/* {`{
                    "symbols": [
                {
                    "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500"
                        },
                {
                    "proName": "FOREXCOM:NSXUSD",
                "title": "US 100"
                        },
                {
                    "proName": "FX_IDC:EURUSD",
                "title": "EUR/USD"
                        },
                {
                    "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
                        },
                {
                    "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
                        }
                ],
                "colorTheme": "light",
                "isTransparent": false,
                "showSymbolLogo": true,
                "locale": "in"
                }`} */}
            </script>
        </div>
    </>
}
export default Ticker