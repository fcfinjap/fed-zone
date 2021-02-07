/* // Axios setup
import axios from 'axios';

// Yext Knowledge API inputs
var YEXT_ACCOUNT_ID = '3416322';
var YEXT_API_KEY = '54840b0235655e0300e29956e1651911'
var YEXT_VERSION = '20210130';
var YEXT_SORT = '[{"datePosted": "DESCENDING"}]';
var YEXT_TYPE = 'ce_sotd'

// Format Entities:List Knowledge API request
var apiUrl = `https://api.yext.com/v2/accounts/${YEXT_ACCOUNT_ID}/entities?api_key=${YEXT_API_KEY}&v=${YEXT_VERSION}&sortBy=${YEXT_SORT}&entityTypes=${YEXT_TYPE}`; */

/* // Pull Yext Song data
function getYextSotds() {
    axios.get(apiUrl)
    .then(function (response) {
        return response.data.response.entities;
    })
    .catch(function (error) {
        return "An error has occured.";
    })
} */
var songs = [
    {
        datePosted: '2020-08-24',
        description: "Fair warning, Julian Casablanca's falsetto will have you screaming in the shower. The intro to a fantastic 2020 album by The Strokes",
        name: 'The Adults Are Talking',
        c_albumCover: { 
            image: {
                url: "https://a.mktgcdn.com/p/YSXpiHGNDyGbwLM9LJRc6CER7kMHKmIipr8fVEUT8k0/300x300.png",
                alternateText: "The New Abnormal"
            } 
        },
        c_appleMusicURL: 'https://music.apple.com/us/album/the-adults-are-talking/1498121188?i=1498121711',
        c_artist: 'The Strokes',
        c_spotifyURL: 'https://open.spotify.com/track/5ruzrDWcT0vuJIOMW7gMnW',
        meta: {
            accountId: '3416322',
            uid: 'my8LRA',
            id: 'sotd-6',
            timestamp: '2021-01-30T17:43:58',
            folderId: '0',
            language: 'en',
            countryCode: 'US',
            entityType: 'ce_sotd'
        }
    },
    {
        datePosted: '2019-11-18',
        description: "Travis Scott & Metro Boomin bring some hip-hop to James Blake's slowtempo style. A dark, wavy vibe for 2AM listening (or if you're me 24/7)",
        name: 'Mile High',
        c_albumCover: { 
            image: {
                url: "https://a.mktgcdn.com/p/Eh2jpViyKh75nW5E-tt9WKzDTdo7UDGlXuRFY43N-80/316x316.jpg",
                alternateText: "Assume Form",
            }
        },
        c_appleMusicURL: 'https://music.apple.com/us/album/mile-high-feat-travis-scott-metro-boomin/1447513857?i=1447513864',
        c_artist: 'James Blake',
        c_spotifyURL: 'https://open.spotify.com/track/4cQrSREMqBSvJ8ZzBZjVb8',
        meta: {
            accountId: '3416322',
            uid: 'vA8LRj',
            id: 'sotd-5',
            timestamp: '2021-01-30T17:43:57',
            folderId: '0',
            language: 'en',
            countryCode: 'US',
            entityType: 'ce_sotd'
        }
    },
    {
        datePosted: '2019-11-11',
        description: 'ntroducing Ghetto Sage, the collective of our favorite Chicago rappers today: Noname, Saba, and Smino. Another fire project by the trio, enjoy.',
        name: 'Häagen Dazs',
        c_albumCover: { 
            image: {
                url: "https://a.mktgcdn.com/p/_Lif6vwG0gHJUwSpyPLd8oVa3b9gGriq7XyomHmv-Tg/500x500.jpg",
                alternateText: "Assume Form",
            }
        },
        c_appleMusicURL: 'https://music.apple.com/us/album/h%C3%A4agen-dazs/1483697180?i=1483697306',
        c_artist: 'Ghetto Sage',
        c_spotifyURL: 'https://open.spotify.com/track/0i1qCBWE1JbfbCBPAofuHT',
        meta: {
            accountId: '3416322',
            uid: 'R0AMy5',
            id: 'sotd-4',
            timestamp: '2021-01-30T17:43:57',
            folderId: '0',
            language: 'en',
            countryCode: 'US',
            entityType: 'ce_sotd'
        }
    },
    {
        datePosted: '2019-11-01',
        description: 'Choker is an up and coming pop artist who reminds me of Frank Ocean. The song shows off his versatility, one of my favorites of 2019',
        name: 'Petrol Bliss',
        c_albumCover: {
            image: {
                url: "https://a.mktgcdn.com/p/ppLZcNmDMj1nRzdKnhoxsaO50ZJo7OI0pbGvxFXogaM/500x500.jpg",
                alternateText: "Assume Form",
            }
        },
        c_appleMusicURL: 'https://music.apple.com/us/album/petrol-bliss/1463240780?i=1463240781',
        c_artist: 'Choker',
        c_spotifyURL: 'https://open.spotify.com/track/7w0lCrXGoUj5b8DgW5wZlx',
        meta: {
            accountId: '3416322',
            uid: '898Qj4',
            id: 'sotd-3',
            timestamp: '2021-01-30T17:43:57',
            folderId: '0',
            language: 'en',
            countryCode: 'US',
            entityType: 'ce_sotd'
        }
    },
    {
        datePosted: '2019-10-29',
        description: "Wheezy produced the beat, so you know it's gas. Song just hits right. When I listen to it, it makes me want to put on my stank face",
        name: 'Baby',
        c_albumCover: { 
            image: {
                url: "https://a.mktgcdn.com/p/IcCFbskB4v2mV00l8O_GJqHWxzZVmYCcqCN3lvTHENk/220x220.jpg",
                alternateText: "Assume Form",
            }
        },
        c_appleMusicURL: 'https://music.apple.com/us/album/baby/1476226857?i=1476226882',
        c_artist: 'Lil Baby & DaBaby',
        c_spotifyURL: 'https://open.spotify.com/track/5MPPttjfGap2C6j6eKcO6J',
        meta: {
            accountId: '3416322',
            uid: 'L9JBxk',
            id: 'sotd-2',
            timestamp: '2021-01-30T17:43:57',
            folderId: '0',
            language: 'en',
            countryCode: 'US',
            entityType: 'ce_sotd'
        }
    },
    {
        datePosted: '2019-10-23',
        description: 'Cuco and Suscat0 combine simple melodies, lo-fi psychadelic sounds, and love-inspired content to create peaceful, playful, nostalgic vibes',
        name: 'Keeping Tabs',
        c_albumCover: { 
            image: {
                url: "https://a.mktgcdn.com/p/pLzScvQ7wwuSWF-D758Gl66a3vO4kOmfFEWzJFFZf8I/316x315.png",
                alternateText: "Assume Form",
            }
        },
        c_appleMusicURL: 'https://music.apple.com/us/album/keeping-tabs-feat-suscat0/1467222895?i=1467223177',
        c_artist: 'Cuco',
        c_spotifyURL: 'https://open.spotify.com/track/1KypMTzxfo8NNIZ30lanZa?si=oI1-Zpt8ShGESywjacU5Ww',
            meta: {
            accountId: '3416322',
            uid: 'OObEQq',
            id: 'sotd-1',
            timestamp: '2021-01-30T17:43:57',
            folderId: '0',
            language: 'en',
            countryCode: 'US',
            entityType: 'ce_sotd'
        }
    }
]

function addSotds(songList) {
    for (song in songList) {
        generateSotdDiv(songList[song]);
    }
}

function generateSotdDiv(songInfo) {
    // Initialize sotd
    var sotd = document.createElement("div");
    sotd.className = "sotd";

    // Add image to sotd
    var imgWrap = document.createElement("div");
    imgWrap.className = "img-wrap";

    var img = document.createElement("img");
    img.src = songInfo.c_albumCover.image.url;
    img.alt = songInfo.c_albumCover.image.alternateText;
    img.className = "sotd-img";

    var sotdDate = document.createElement("div");
    sotdDate.className = "sotd-date";
    var date = document.createElement("span");
    var postedDate = new Date(songInfo.datePosted);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthString = document.createTextNode(months[postedDate.getMonth()]);
    var dayString = document.createTextNode(ordinalSuffixOf(postedDate.getDay() + 1));
    var yearString = document.createTextNode(postedDate.getFullYear());
    var lineBreak1 = document.createElement("br");
    var lineBreak2 = document.createElement("br");

    date.appendChild(monthString);
    date.appendChild(lineBreak1);
    date.appendChild(dayString);
    date.appendChild(lineBreak2);
    date.appendChild(yearString);
    sotdDate.appendChild(date);

    imgWrap.appendChild(img);
    imgWrap.appendChild(sotdDate);
    sotd.appendChild(imgWrap);

    // Add content container to sotd
    var sotdContentContainer = document.createElement("div");
    sotdContentContainer.className = "sotd-content-container";

    var sotdTitle = document.createElement("div");
    sotdTitle.className = "sotd-title";
    var titleText = document.createTextNode(songInfo.name + " | " + songInfo.c_artist);
    sotdTitle.appendChild(titleText);

    var sotdDesc = document.createElement("div");
    sotdDesc.className = "sotd-description";
    var descText = document.createTextNode(songInfo.description);
    sotdDesc.appendChild(descText);

    var sotdMobileDate = document.createElement("div");
    sotdMobileDate.className = "sotd-date-mobile";
    var mobileDateText = document.createTextNode(months[postedDate.getMonth()] + " " + ordinalSuffixOf(postedDate.getDay() + 1) + ", " + postedDate.getFullYear());
    sotdMobileDate.appendChild(mobileDateText);

    sotdContentContainer.appendChild(sotdTitle);
    sotdContentContainer.appendChild(sotdDesc);
    sotdContentContainer.appendChild(sotdMobileDate);
    sotd.appendChild(sotdContentContainer);

    // Add sotd link box to sotd
    var sotdLinks = document.createElement("div");
    sotdLinks.className = "sotd-link-box";

    var list = document.createElement("ul");

    var spotify = document.createElement("li");
    var spotifyLink = document.createElement("a");
    spotifyLink.href = songInfo.c_spotifyURL;
    spotifyLink.target = "_blank";
    var spotifyLogo = document.createElement("i");
    spotifyLogo.classList.add("fa", "fa-spotify", "fa-2");
    spotifyLogo.setAttribute('aria-hidden', 'true');
    var spotifyLinkText = document.createElement("div");
    spotifyLinkText.className = "link-text";
    var spotifyTextNode = document.createTextNode("Spotify");
    spotifyLinkText.appendChild(spotifyTextNode);
    spotifyLink.appendChild(spotifyLogo);
    spotifyLink.appendChild(spotifyLinkText);
    spotify.appendChild(spotifyLink);
    list.appendChild(spotify);

    var appleMusic = document.createElement("li");
    var aMLink = document.createElement("a");
    aMLink.href = songInfo.c_appleMusicURL;
    aMLink.target = "_blank";
    var aMLogo = document.createElement("i");
    aMLogo.classList.add("fab", "fa-itunes", "fa-2");
    aMLogo.setAttribute('aria-hidden', 'true');
    var aMLinkText = document.createElement("div");
    aMLinkText.className = "link-text";
    var aMTextNode = document.createTextNode("Apple Music");
    aMLinkText.appendChild(aMTextNode);
    aMLink.appendChild(aMLogo);
    aMLink.appendChild(aMLinkText);
    appleMusic.appendChild(aMLink);
    list.appendChild(appleMusic);

    sotdLinks.appendChild(list);
    sotd.appendChild(sotdLinks);

    // Add sotd to container
    var element = document.getElementById("sotd-container");
    element.appendChild(sotd);
}

function ordinalSuffixOf(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

addSotds(songs);