# Itunes-Query-Fetcher

---

This is a npm module that makes queries to the ITunes Search API.

---

The documentation for that API can be found here: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

---

To install this module, run the command...

```

npm install itunes-query-fetcher

```

...in the directory that your node project is located.

---

This module makes use of the node-request module in order to process the API calls. For example, if you're trying to look up the movie "Inception" in the ITunes Store and you would like it's information, you perform a search like this:

---

```

const request = require('request');
const queryFetcher = require('itunes-query-fetcher');

var term = "inception";
var media = "movie";
var entity = "movie";

queryFetcher.queryFetcher("inception", "movie", "movie", (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results);
	}
});

```
---

The results for this request would look something like this:

```

{ resultCount: 1,
	 results:
	  [ { wrapperType: 'track',
	      kind: 'feature-movie',
	      trackId: 400763833,
	      artistName: 'Christopher Nolan',
	      trackName: 'Inception',
	      trackCensoredName: 'Inception',
	      trackViewUrl: 'https://itunes.apple.com/us/movie/inception/id400763833?uo=4',
	      previewUrl: 'http://video.itunes.apple.com/apple-assets-us-std-000001/Video/8c/d7/81/mzm.ralngrgq..640x356.h264lc.d2.p.m4v',
	      artworkUrl30: 'http://is2.mzstatic.com/image/thumb/Video7/v4/5f/51/75/5f5175bf-5f14-39e7-9e37-30548c2d3044/source/30x30bb.jpg',
	      artworkUrl60: 'http://is2.mzstatic.com/image/thumb/Video7/v4/5f/51/75/5f5175bf-5f14-39e7-9e37-30548c2d3044/source/60x60bb.jpg',
	      artworkUrl100: 'http://is2.mzstatic.com/image/thumb/Video7/v4/5f/51/75/5f5175bf-5f14-39e7-9e37-30548c2d3044/source/100x100bb.jpg',
	      collectionPrice: 9.99,
	      trackPrice: 9.99,
	      trackRentalPrice: 2.99,
	      collectionHdPrice: 14.99,
	      trackHdPrice: 14.99,
	      trackHdRentalPrice: 3.99,
	      releaseDate: '2010-07-16T07:00:00Z',
	      collectionExplicitness: 'notExplicit',
	      trackExplicitness: 'notExplicit',
	      trackTimeMillis: 8886218,
	      country: 'USA',
	      currency: 'USD',
	      primaryGenreName: 'Action & Adventure',
	      contentAdvisoryRating: 'PG-13',
	      longDescription: 'Dom Cobb (Leonardo DiCaprio) is a skilled thief, the best in the dangerous art of extraction: stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable. Cobb\'s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible--inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse; their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.',
	      hasITunesExtras: true } ] }


```
---

The above example is included in the example.js file included in the module, which you can download and run.

---

NPM Link: https://www.npmjs.com/package/itunes-query-fetcher

Github Link: https://github.com/monstorium/itunes-query-fetcher