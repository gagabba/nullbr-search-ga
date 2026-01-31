本项目中：
App ID: 8bWDEoOb1

----------------
ℹ️ 影视查询接口 /search
📌 基础信息
📝 接口说明：关键字搜索 🔍，支持搜索合集 📁、电影 🎥、剧集 📺、人物 👤
🏷️ 接口分类：META
🚀 请求方式：GET
🛣️ 接口路径：/search?query=xxx
🔐 鉴权方式：APP_ID
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
query	string	查询关键字 🔎	是✅
page	Int	页面 默认1 📋	否❌
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/search?query=iron%20man' \
     --header 'X-APP-ID: xxxxxxxxx'

equal

curl --request GET \
     --url 'https://api.nullbr.eu.org/search?query=iron%20man&page=1' \
     --header 'X-APP-ID: xxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
403 🚫	Invalid APP ID 无效 APP_ID
🎯 成功响应示例 (200 OK)
{
  "page": 1,
  "total_pages": 1,
  "total_results": 24,
  "items": [
    {
      "media_type": "collection",
      "tmdbid": 131292,
      "poster": "/s2jnvr4jFaAooBlk68S4IY5J0Ak.jpg",
      "title": "钢铁侠（系列）",
      "overview": "《钢铁侠》（Iron Man）是漫威影业出品的一部科幻冒险电影，取材自漫威漫画，是漫威电影宇宙的首部电影，由乔恩·费儒执导，小罗伯特·唐尼及格温妮斯·帕特洛等主演。《钢铁侠》改编自“漫威漫画”中的经典故事，讲述了工业家及发明家托尼·斯塔克遭阴谋绑架，被迫制造最致命的武器，身受重伤的他却暗中制造了一套高科技盔甲，保护自己逃生，从此变身“钢铁侠”保卫地球。",
      "115-flg": 0
    },
    {
      "media_type": "collection",
      "tmdbid": 334356,
      "poster": "/3ag7T0qwL3yAMrocJERu4z3eMYW.jpg",
      "title": "铁拳（系列）",
      "overview": "",
      "115-flg": 0
    },
    {
      "media_type": "tv",
      "tmdbid": 7330,
      "poster": "/kIJGgBwh37V2nfgnJFaN7zDIjdv.jpg",
      "title": "钢铁侠历险记",
      "overview": "塔克工业的总裁霍华德·斯塔克，在拒绝奥巴代亚要将科技运用到武器研发掌握商机后，就在一场空难中消失了。\n\n我们的主人公，16岁的天才少年托尼打造了一身高科技的盔甲，试图调查父亲的死因，他怀疑这一切跟奥巴代亚有着直接的联系。化身为钢铁侠后，托尼一直在阻止奥巴代亚的各种邪恶计划，并且无数次与其它坏人作战，拯救了地球。\n\n罗迪和小辣椒一直在协助托尼的正义行动。但托尼毕竟还是一个在校学生，由于经常迟到或者错过学校的各项活动，他总是要编造理由来为自己脱身。\n\n身为一个青少年，却同时要肩负着超级英雄的重任，尽管托尼拥有非凡的生存技能，但他还是必须要想办法来平衡来自这方面的压力。",
      "vote_average": 7.2,
      "release_date": "2009-04-24",
      "115-flg": 0,
      "magnet-flg": 1,
      "video-flg": 0,
      "ed2k-flg": 0
    },
    {
      "media_type": "movie",
      "tmdbid": 1726,
      "poster": "/jOCNOwURzzkOBCpmJKg4Fay4F0L.jpg",
      "title": "钢铁侠",
      "overview": "斯塔克军火公司是美军在全球范围内第一大军火供应商，其新任掌门人托尼·斯塔克风流倜傥，天资聪颖。他与公司元老俄巴迪亚·斯坦合作无间，共同将斯塔克公司的业务推向顶峰。现实生活中的托尼热衷收集名贵跑车，搞点儿发明创造，当然露水姻缘更不可少。所幸他身边有维吉尼亚·波茨这样的好助手细心打理一切，才让他能自由自在过着贵公子的生活。在前往中东为军方展示新型武器的途中，托尼一众遭到恐怖分子袭击。他被弹片击中险些丧命，在英森博士的帮助下，托尼体内移植了一颗核动力的人工心脏。恐怖分子要求托尼制造强大的杀伤性武器，他和英森虚与委蛇，暗中制造了一套由聚变能源驱动的钢铁盔甲。穿上盔甲托尼大闹恐怖分子的基地，回到美国后又对其进行了改进。却不知，接下来有更为黑暗的阴谋等着他……",
      "vote_average": 7.648,
      "release_date": "2008-04-30",
      "115-flg": 1,
      "magnet-flg": 1,
      "video-flg": 1,
      "ed2k-flg": 1
    }
 ]
}

📊 其他说明
该查询基本满足了大部分应用的搜索需求， 支持多语言， 多类型 等等。 比仅仅用关键字查询标题会更全面。

响应键值	说明
media_type	类型，支持 合集， 人物， 电影， 剧集
115-flg	1: 该类型有网盘资源 0:该类型无网盘资源
magnet-flg	1: 该类型有磁力资源 0:该类型无磁力资源
ed2k-flg	1: 该类型有ed2k资源 0:该类型无ed2k资源
video-flg	1: 该类型有m3u8资源 0:该类型无m3u8资源
-----------------
ℹ️ 获取电影信息 /movie/{tmdbid}
📌 基础信息
📝 接口说明：获取电影详细数据📋
🏷️ 接口分类：META
🚀 请求方式：GET
🛣️ 接口路径：/movie/{tmdbid}
🔐 鉴权方式：APP_ID
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
tmdbid	Int	tmdbid📋	是✅
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/movie/78' \
     --header 'X-APP-ID: xxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
403 🚫	Invalid APP ID 无效 APP_ID
404 🚫	The resource you requested could not be found 请求资源不存在
🎯 成功响应示例 (200 OK)
{
  "id": 78,
  "poster": "/l8WEtBkq6h8i3Pqnu7hpRqU0Uko.jpg",
  "title": "银翼杀手",
  "overview": "二十一世纪初，泰勒公司先进机器人发展到了连锁阶段，那些机器人实际上和人类完全相同，被称为复制人，这些复制人在体力、敏捷度和智慧上都不错，被人类用于外世界从事奴隶的劳动、危险的探险工作及其他星球的殖民任务上，经过外界殖民地连锁六号战斗组的血腥暴动后，地球上宣布复制人为违法物——必须处死。特勤小组——银翼杀手受命侦查任何入侵复制人，并予以击毙。那不叫做处决，而是称之为退休。Rick Deckard（Harrison Ford 饰）就是银翼杀手之一，某天，他奉命追踪潜入泰勒公司的复制人Roy Batty（Rutger Hauer 饰）、Zhora（Joanna Cassidy 饰）、Leon（Brion James 饰）和Pris（Daryl Hannah 饰），和他搭档的是泰勒公司的连锁六号复制人Rachael（Sean Young 饰）在追踪的过程中，他和瑞秋产生了感情，明白了复制人们为了延长自身的机器寿命而做出的努力，渐渐地开始反思人类的命运。",
  "vote": 7.938,
  "release_date": "1982-06-25",
  "115-flg": 1,
  "magnet-flg": 1,
  "ed2k-flg": 1,
  "video-flg": 1
}

📊 其他说明
响应键值	说明
115-flg	1: 该电影有网盘资源 0:该电影无网盘资源
magnet-flg	1: 该电影有磁力资源 0:该电影无磁力资源
ed2k-flg	1: 该电影有ed2k资源 0:该电影无ed2k资源
video-flg	1: 该电影有m3u8资源 0:该电影无m3u8资源

-----------------
🌐 获取电影的网盘分享 /movie/{tmdbid}/115
📌 基础信息
📝 接口说明：获取电影网盘资源📋
🏷️ 接口分类：RES
🚀 请求方式：GET
🛣️ 接口路径：/movie/{tmdbid}/115
🔐 鉴权方式：'APP_ID' 和 'API_KEY'
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
➤ 在 Header 中添加：X-API-KEY: User's API_KEY
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
tmdbid	Int	tmdbid📋	是✅
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/movie/78/115' \
     --header 'X-APP-ID: xxxxxxxxx' \
     --header 'X-API-KEY: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
401 🚫	Your application does not have permission to access the resource 该 APP_ID 没有获取该(类)资源的权限
403 🚫	Invalid APP ID 无效 APP_ID
403 🚫	Invalid API Key 无效 API_KEY
429 🚫	Rate limit exceeded 用户(API_KEY)请求过快
🎯 成功响应示例 (200 OK)
{
  "115": [
    {
      "title": "银翼杀手 (1982)",
      "size": "83.03 GB",
      "share_link": "https://115cdn.com/s/swzxgu436gr?password=9527&#",
      "resolution": "2160p",
      "quality": "HDR10",
      "season_list": null
    },
    {
      "title": "BD16592.[银翼杀手_Blade_Runner_1982][原盘中字_五碟收藏版][81.82GB]Disc4.iso",
      "size": "7.88 GB",
      "share_link": "https://115cdn.com/s/swz0anh36gr?password=1234&#",
      "resolution": null,
      "quality": null,
      "season_list": null
    }
  ],
  "id": 78,
  "page": 1,
  "total_page": 2,
  "media_type": "movie"
}
--------------------
🌐 获取电影的磁力资源 /movie/{tmdbid}/magnet
📌 基础信息
📝 接口说明：获取电影磁力资源📋
🏷️ 接口分类：RES
🚀 请求方式：GET
🛣️ 接口路径：/movie/{tmdbid}/magnet
🔐 鉴权方式：'APP_ID' 和 'API_KEY'
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
➤ 在 Header 中添加：X-API-KEY: User's API_KEY
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
tmdbid	Int	tmdbid📋	是✅
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/movie/78/magnet' \
     --header 'X-APP-ID: xxxxxxxxx' \
     --header 'X-API-KEY: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
401 🚫	Your application does not have permission to access the resource 该 APP_ID 没有获取该(类)资源的权限
403 🚫	Invalid APP ID 无效 APP_ID
403 🚫	Invalid API Key 无效 API_KEY
429 🚫	Rate limit exceeded 用户(API_KEY)请求过快
🎯 成功响应示例 (200 OK)
{
  "id": 78,
  "media_type": "movie",
  "magnet": [
    {
      "name": "银翼杀手[简繁英字幕].Blade.Runner.1982.2160p.UHD.BluRay.Remux.HEVC.HDR.TrueHD.7.1.Atmos",
      "size": "44.69 GB",
      "magnet": "magnet:?xt=urn:btih:8e1a89ec0df4267dcc42a70b58d43693f1bb774e",
      "resolution": "2160p",
      "source": "Ultra HD Blu-ray",
      "quality": [
        "Remux",
        "HDR10",
        "HD"
      ],
      "zh_sub": 1
    },
    {
      "name": "Blade.Runner.1982.1080p.UHD.BluRay.DDP7.1.HDR.x265",
      "size": "21.6 GB",
      "magnet": "magnet:?xt=urn:btih:1a27c333224cc6b66238a34dfbe363472b23afa3",
      "resolution": "1080p",
      "source": "Ultra HD Blu-ray",
      "quality": "HDR10",
      "zh_sub": 1
    },
    {
      "name": "Blade Runner 2160p Bluray Remux Collection Plex Naming Scheme",
      "size": "124.0 GB",
      "magnet": "magnet:?xt=urn:btih:5987ad01a9a7f5df3fb854e048f8149069f7e3cc",
      "resolution": "2160p",
      "source": "Ultra HD Blu-ray",
      "quality": "REMUX",
      "zh_sub": 0
    },
    {
      "name": "Blade.Runner.1982.2160p.BluRay.x264.8bit.SDR.DTS-HD.MA.TrueHD.7.1.Atmos",
      "size": "64.39 GB",
      "magnet": "magnet:?xt=urn:btih:0fcf5037464be46daba29c7d90112fa737c8908a",
      "resolution": "2160p",
      "source": "Ultra HD Blu-ray",
      "quality": "Standard Dynamic Range",
      "zh_sub": 0
    },
    {
      "name": "Blade.Runner.1982.2160p.BluRay.x265.10bit.SDR.DTS-HD.MA.TrueHD.7.1.Atmos",
      "size": "62.02 GB",
      "magnet": "magnet:?xt=urn:btih:c1fce223a519d1dccac2c3475e8c6f5c9c21201b",
      "resolution": "2160p",
      "source": "Ultra HD Blu-ray",
      "quality": "Standard Dynamic Range",
      "zh_sub": 0
    }
  ]
}

📊 其他说明
电影磁力资源按照是否包含中文字幕区分，从大到小排序， 返回最多5个 ➤ 返回头两个最大的有中文字幕资源 ➤ 外加返回头三个最大的非中文字幕资源
响应键值	说明
zh_sub	1: 该磁力包含中文字幕 0:该磁力无中文字幕
------------------------------
🌐 获取电影的ed2k资源 /movie/{tmdbid}/ed2k
📌 基础信息
📝 接口说明：获取电影ed2k资源📋
🏷️ 接口分类：RES
🚀 请求方式：GET
🛣️ 接口路径：/movie/{tmdbid}/ed2k
🔐 鉴权方式：'APP_ID' 和 'API_KEY'
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
➤ 在 Header 中添加：X-API-KEY: User's API_KEY
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
tmdbid	Int	tmdbid📋	是✅
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/movie/78/ed2k' \
     --header 'X-APP-ID: xxxxxxxxx' \
     --header 'X-API-KEY: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
401 🚫	Your application does not have permission to access the resource 该 APP_ID 没有获取该(类)资源的权限
403 🚫	Invalid APP ID 无效 APP_ID
403 🚫	Invalid API Key 无效 API_KEY
429 🚫	Rate limit exceeded 用户(API_KEY)请求过快
🎯 成功响应示例 (200 OK)
{
  "id": 78,
  "media_type": "movie",
  "ed2k": [
    {
      "name": "Blade.Runner.1982.2160p.UHD.BluRay.Remux.HEVC.HDR.TrueHD.7.1.Atmos.mkv",
      "size": "44.69 GB",
      "ed2k": "ed2k://|file|Blade.Runner.1982.2160p.UHD.BluRay.Remux.HEVC.HDR.TrueHD.7.1.Atmos.mkv|47982811361|DBF0FC2DE8A047ABD35A1CDA29CAB5E6|/",
      "resolution": "2160p",
      "source": "Ultra HD Blu-ray",
      "quality": [
        "Remux",
        "HDR10",
        "HD"
      ],
      "zh_sub": 1
    },
    {
      "name": "Blade.Runner.1982.1080p.UHD.BluRay.DDP7.1.HDR.x265.mkv",
      "size": "21.59 GB",
      "ed2k": "ed2k://|file|Blade.Runner.1982.1080p.UHD.BluRay.DDP7.1.HDR.x265.mkv|23187375390|23A10DBB264CAEA302B608520BDF6393|/",
      "resolution": "1080p",
      "source": "Ultra HD Blu-ray",
      "quality": "HDR10",
      "zh_sub": 1
    },
    {
      "name": "Blade.Runner.2049.(2017).{imdb-tt1856101}.[Hybrid][Remux-2160p][HDR10][TrueHD.Atmos.7.1][HEVC].mkv",
      "size": "72.89 GB",
      "ed2k": "ed2k://|file|Blade.Runner.2049.(2017).{imdb-tt1856101}.[Hybrid][Remux-2160p][HDR10][TrueHD.Atmos.7.1][HEVC].mkv|78266038983|3D879A56370FCB852C3CB68B59423CE9|/",
      "resolution": "2160p",
      "source": null,
      "quality": [
        "Hybrid",
        "Remux",
        "HDR10"
      ],
      "zh_sub": 0
    },
    {
      "name": "Blade.Runner.1982.2160p.BluRay.x265.10bit.SDR.DTS-HD.MA.TrueHD.7.1.Atmos.mkv",
      "size": "61.47 GB",
      "ed2k": "ed2k://|file|Blade.Runner.1982.2160p.BluRay.x265.10bit.SDR.DTS-HD.MA.TrueHD.7.1.Atmos.mkv|66002974440|8540127BA0FFC34BC5486626235B603F|/",
      "resolution": "2160p",
      "source": "Ultra HD Blu-ray",
      "quality": "Standard Dynamic Range",
      "zh_sub": 0
    },
    {
      "name": "Blade.Runner.1982.The.Final.Cut.2160p.BluRay.REMUX.HEVC.DTS-HD.MA.TrueHD.7.1.Atmos.mkv",
      "size": "53.1 GB",
      "ed2k": "ed2k://|file|Blade.Runner.1982.The.Final.Cut.2160p.BluRay.REMUX.HEVC.DTS-HD.MA.TrueHD.7.1.Atmos.mkv|57013510401|8158490882D2D1DF11BE6653FD0ACB21|/",
      "resolution": "2160p",
      "source": "Ultra HD Blu-ray",
      "quality": "Remux",
      "zh_sub": 0
    }
  ]
}

📊 其他说明
电影ed2k资源按照是否包含中文字幕区分，从大到小排序， 返回最多8个 ➤ 返回5个最大的有中文字幕资源 ➤ 外加3个最大的非中文字幕资源
响应键值	说明
zh_sub	1: 该磁力包含中文字幕 0:该磁力无中文字幕
--------------
ℹ️ 获取剧集信息 /tv/{tmdbid}
📌 基础信息
📝 接口说明：获取剧集详细数据📋
🏷️ 接口分类：META
🚀 请求方式：GET
🛣️ 接口路径：/tv/{tmdbid}
🔐 鉴权方式：APP_ID
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
tmdbid	Int	tmdbid📋	是✅
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/tv/1396' \
     --header 'X-APP-ID: xxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
403 🚫	Invalid APP ID 无效 APP_ID
404 🚫	The resource you requested could not be found 请求资源不存在
🎯 成功响应示例 (200 OK)
{
  "id": 1396,
  "poster": "/bSldznJEjkeojc5dzjLvlukqVEU.jpg",
  "title": "绝命毒师",
  "overview": "新墨西哥州的高中化学老师沃尔特·H·怀特是拮据家庭的唯一经济来源。他大半生安分守己，兢兢业业，却在50岁生日之际突然得知自己罹患肺癌晚期的噩耗，原本便不甚顺意的人生顿时雪上加霜。为了保障怀孕的妻子斯凯勒和残疾的儿子小沃特能在自己死后衣食无忧，沃尔特决意铤而走险。他主动找到曾经的学生、而今的毒贩小混混杰西·平克曼谈合作，并运用娴熟高超的化学技术提炼出高纯度冰毒交给后者贩售。孰料事态的发展却在平克曼带回毒品供销商疯狂小八及其表弟后急转直下，沃尔特的人生也由此彻底步向失控。他被迫开始了教书与制毒的双重生活，逐渐坠落至万劫不复的深渊。",
  "vote": 8.9,
  "release_date": "2008-01-20",
  "number_of_seasons": 5,
  "115-flg": 1,
  "magnet-flg": 1,
  "ed2k-flg": 1, 
  "video-flg": 1
}

📊 其他说明
响应键值	说明
115-flg	1: 该剧集有网盘资源 0:该剧集无网盘资源
magnet-flg	1: 该剧集有磁力资源 0:该剧集无磁力资源 (！！)
ed2k-flg	1: 该剧集有ed2k资源 0:该剧集无ed2k资源 (！！)
video-flg	1: 该剧集有m3u8资源 0:该剧集无m3u8资源 (！！)
Note: 对于剧集来说， 只有115网盘分享是在整个剧集level分享的。 magnet资源会在season 和 episode level 提供， 而 ed2k和video 仅会在episode level 提供
以1399 - 绝命毒师 为例
/tv/1399/115 能正常返回网盘分享
但是不提供如下接口 /tv/1399/magnet /tv/1399/ed2k /tv/1399/video 原因是 ed2k/video 是基于episode 层面的， magnet 是基于season 层面和 episode层面
你必须请求/tv/1399/season/x/episode/x 返回的flg 才能正确标识该episode对应资源的有无

/tv/1399/season/x 返回的magnet-flg 标识 该magnet是包含整季内容
/tv/1399/season/x/episode 返回的magnet-flg 标识 该magnet仅仅包含该集内容
---------------
ℹ️ 获取剧集单集信息 /tv/{tmdbid}/season/{season_number}episode/{episode_number}
📌 基础信息
📝 接口说明：获取剧集单集详细数据📋
🏷️ 接口分类：META
🚀 请求方式：GET
🛣️ 接口路径：/tv/{tmdbid}/season/{season_number}/episode/{episode_number}
🔐 鉴权方式：APP_ID
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
tmdbid	Int	tmdbid📋	是✅
season_number	Int	season_number📋	是✅
episode_number	Int	episode_number📋	是✅
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/tv/1396/season/1/episode/3' \
     --header 'X-APP-ID: xxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
403 🚫	Invalid APP ID 无效 APP_ID
404 🚫	The resource you requested could not be found 请求资源不存在
🎯 成功响应示例 (200 OK)
{
  "tv_show_id": 1396,
  "season_number": 1,
  "episode_number": 3,
  "episode_type": "standard",
  "name": "袋在河里",
  "overview": "沃尔特收拾第一次毒品交易后留下的残局，而斯凯勒即将了解到他的双重人生真相。",
  "air_date": "2008-02-10",
  "vote_average": 8.327,
  "poseter": "/dLgiPZCVamFcaa7Gaqudrldj15h.jpg",
  "runtime": 49,
  "magnet-flg": 1,
  "ed2k-flg": 1
}

📊 其他说明
响应键值	说明
magnet-flg	1: 该剧集有磁力资源 0:该剧集无磁力资源
ed2k-flg	1: 该剧集有ed2k资源 0:该剧集无ed2k资源
---------------------
🌐 获取剧集季的磁力资源 /tv/{tmdbid}/season/{season_number}/magnet
📌 基础信息
📝 接口说明：获取剧集季磁力资源📋
🏷️ 接口分类：RES
🚀 请求方式：GET
🛣️ 接口路径：/tv/{tmdbid}/season/{season_number}/magnet
🔐 鉴权方式：'APP_ID' 和 'API_KEY'
➤ 在 Header 中添加：X-APP-ID: Your APP_ID
➤ 在 Header 中添加：X-API-KEY: User's API_KEY
📥 请求说明
📂 URL参数
参数名	类型	说明	必填
tmdbid	Int	tmdbid📋	是✅
🧪 请求示例
curl --request GET \
     --url 'https://api.nullbr.eu.org/tv/1396/season/1/magnet' \
     --header 'X-APP-ID: xxxxxxxxx' \
     --header 'X-API-KEY: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

📡 响应说明
📊 响应状态码
状态码	说明
200 ✅	Success 请求成功
401 🚫	Your application does not have permission to access the resource 该 APP_ID 没有获取该(类)资源的权限
403 🚫	Invalid APP ID 无效 APP_ID
403 🚫	Invalid API Key 无效 API_KEY
429 🚫	Rate limit exceeded 用户(API_KEY)请求过快
🎯 成功响应示例 (200 OK)
{
  "id": 1396,
  "season_number": 1,
  "media_type": "tv",
  "magnet": [
    {
      "name": "Breaking.Bad.S01.2008.NF.WEB-DL.2160p.HEVC.DDP-Xiaomi",
      "size": "35.52 GB",
      "magnet": "magnet:?xt=urn:btih:2e6491e9081b7932bf063b0404d86510b0a6711a",
      "resolution": "2160p",
      "source": "Web",
      "quality": null,
      "zh_sub": 1
    },
    {
      "name": "Breaking.Bad.S01.2160p.NF.WEB-DL.DDP.5.1.H.265-BlackTV",
      "size": "35.52 GB",
      "magnet": "magnet:?xt=urn:btih:33f4d6b7f685a8d6013e8d3a3048e4fa628adecf",
      "resolution": "2160p",
      "source": "Web",
      "quality": null,
      "zh_sub": 1
    },
    {
      "name": "Breaking Bad COMPLETE S01 S05 2160p WEB DL Rus Ukr Eng DTS HD MA5 1 x264 TrollUHD RiCK",
      "size": "1740.8 GB",
      "magnet": "magnet:?xt=urn:btih:1b42b99b9fbc0e0416a379787f250eb73b7434e3",
      "resolution": "2160p",
      "source": "Web",
      "quality": "Complete",
      "zh_sub": 0
    },
    {
      "name": "Breaking Bad S01 S05 Seasons 1 5 Complete 1080p H264 BluRay MIXED",
      "size": "177.9 GB",
      "magnet": "magnet:?xt=urn:btih:01d2c1f3091ef56f08f840525264f51fac34ee9d",
      "resolution": "1080p",
      "source": "Blu-ray",
      "quality": "Complete",
      "zh_sub": 0
    },
    {
      "name": "Breaking Bad S01 S05 COMPLETE 1080p BluRay 10bit DD5 1 With Commentary x265 POIASD",
      "size": "75.8 GB",
      "magnet": "magnet:?xt=urn:btih:0c9a83c76176b787acf14b1961c139421a13f2e0",
      "resolution": "1080p",
      "source": "Blu-ray",
      "quality": "Complete",
      "zh_sub": 0
    }
  ]
}

📊 其他说明
磁力资源按照是否包含中文字幕区分，从大到小排序， 返回最多5个
➤ 返回头两个最大的有中文字幕资源
➤ 外加返回头三个最大的非中文字幕资源
响应键值	说明
zh_sub	1: 该磁力包含中文字幕 0:该磁力无中文字幕
-----------------------
