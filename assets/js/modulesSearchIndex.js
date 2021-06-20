
var camelCaseTokenizer = function (builder) {
    var pipelineFunction = function (token) {
        var previous = '';
        var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
            var current = cur.toLowerCase();
            if (acc.length === 0) {
                previous = current;
                return acc.concat(current);
            }
            previous = previous.concat(current);
            return acc.concat([current, previous]);
        }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }
    
  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"Execute",
            content:"Execute",
            description:'',
            tags:''
        },
        {
            url:'/modules/execute',
            title:"Execute",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"ReadFiles",
            content:"ReadFiles",
            description:'',
            tags:''
        },
        {
            url:'/modules/readfiles',
            title:"ReadFiles",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"ValidateLinks",
            content:"ValidateLinks",
            description:'',
            tags:''
        },
        {
            url:'/modules/validatelinks',
            title:"ValidateLinks",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"Combine",
            content:"Combine",
            description:'',
            tags:''
        },
        {
            url:'/modules/combine',
            title:"Combine",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"Where",
            content:"Where",
            description:'',
            tags:''
        },
        {
            url:'/modules/where',
            title:"Where",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"CsvToMarkdown",
            content:"CsvToMarkdown",
            description:'',
            tags:''
        },
        {
            url:'/modules/csvtomarkdown',
            title:"CsvToMarkdown",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"ValidateMeta",
            content:"ValidateMeta",
            description:'',
            tags:''
        },
        {
            url:'/modules/validatemeta',
            title:"ValidateMeta<T>",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"Less",
            content:"Less",
            description:'',
            tags:''
        },
        {
            url:'/modules/less',
            title:"Less",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"YouTube",
            content:"YouTube",
            description:'',
            tags:''
        },
        {
            url:'/modules/youtube',
            title:"YouTube",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"Branch",
            content:"Branch",
            description:'',
            tags:''
        },
        {
            url:'/modules/branch',
            title:"Branch",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"HtmlQuery",
            content:"HtmlQuery",
            description:'',
            tags:''
        },
        {
            url:'/modules/htmlquery',
            title:"HtmlQuery",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"ExcelToCsv",
            content:"ExcelToCsv",
            description:'',
            tags:''
        },
        {
            url:'/modules/exceltocsv',
            title:"ExcelToCsv",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"GenerateCloudSearchData",
            content:"GenerateCloudSearchData",
            description:'',
            tags:''
        },
        {
            url:'/modules/generatecloudsearchdata',
            title:"GenerateCloudSearchData",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"GroupByMany",
            content:"GroupByMany",
            description:'',
            tags:''
        },
        {
            url:'/modules/groupbymany',
            title:"GroupByMany",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"GenerateJson",
            content:"GenerateJson",
            description:'',
            tags:''
        },
        {
            url:'/modules/generatejson',
            title:"GenerateJson",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"If",
            content:"If",
            description:'',
            tags:''
        },
        {
            url:'/modules/if',
            title:"If",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"Prepend",
            content:"Prepend",
            description:'',
            tags:''
        },
        {
            url:'/modules/prepend',
            title:"Prepend",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"MinifyHtml",
            content:"MinifyHtml",
            description:'',
            tags:''
        },
        {
            url:'/modules/minifyhtml',
            title:"MinifyHtml",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"CopyMeta",
            content:"CopyMeta",
            description:'',
            tags:''
        },
        {
            url:'/modules/copymeta',
            title:"CopyMeta",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"Yaml",
            content:"Yaml",
            description:'',
            tags:''
        },
        {
            url:'/modules/yaml',
            title:"Yaml",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"AutoLink",
            content:"AutoLink",
            description:'',
            tags:''
        },
        {
            url:'/modules/autolink',
            title:"AutoLink",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"HtmlInsert",
            content:"HtmlInsert",
            description:'',
            tags:''
        },
        {
            url:'/modules/htmlinsert',
            title:"HtmlInsert",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"Take",
            content:"Take",
            description:'',
            tags:''
        },
        {
            url:'/modules/take',
            title:"Take",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"Trace",
            content:"Trace",
            description:'',
            tags:''
        },
        {
            url:'/modules/trace',
            title:"Trace",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"MinifyCss",
            content:"MinifyCss",
            description:'',
            tags:''
        },
        {
            url:'/modules/minifycss',
            title:"MinifyCss",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"Download",
            content:"Download",
            description:'',
            tags:''
        },
        {
            url:'/modules/download',
            title:"Download",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"Razor",
            content:"Razor",
            description:'',
            tags:''
        },
        {
            url:'/modules/razor',
            title:"Razor",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"FrontMatter",
            content:"FrontMatter",
            description:'',
            tags:''
        },
        {
            url:'/modules/frontmatter',
            title:"FrontMatter",
            description:""
        }
    );
    a(
        {
            id:28,
            title:"WriteFiles",
            content:"WriteFiles",
            description:'',
            tags:''
        },
        {
            url:'/modules/writefiles',
            title:"WriteFiles",
            description:""
        }
    );
    a(
        {
            id:29,
            title:"Paginate",
            content:"Paginate",
            description:'',
            tags:''
        },
        {
            url:'/modules/paginate',
            title:"Paginate",
            description:""
        }
    );
    a(
        {
            id:30,
            title:"Shortcodes",
            content:"Shortcodes",
            description:'',
            tags:''
        },
        {
            url:'/modules/shortcodes',
            title:"Shortcodes",
            description:""
        }
    );
    a(
        {
            id:31,
            title:"GitHub",
            content:"GitHub",
            description:'',
            tags:''
        },
        {
            url:'/modules/github',
            title:"GitHub",
            description:""
        }
    );
    a(
        {
            id:32,
            title:"Image",
            content:"Image",
            description:'',
            tags:''
        },
        {
            url:'/modules/image',
            title:"Image",
            description:""
        }
    );
    a(
        {
            id:33,
            title:"Concat",
            content:"Concat",
            description:'',
            tags:''
        },
        {
            url:'/modules/concat',
            title:"Concat",
            description:""
        }
    );
    a(
        {
            id:34,
            title:"Tree",
            content:"Tree",
            description:'',
            tags:''
        },
        {
            url:'/modules/tree',
            title:"Tree",
            description:""
        }
    );
    a(
        {
            id:35,
            title:"FileName",
            content:"FileName",
            description:'',
            tags:''
        },
        {
            url:'/modules/filename',
            title:"FileName",
            description:""
        }
    );
    a(
        {
            id:36,
            title:"SearchIndex",
            content:"SearchIndex",
            description:'',
            tags:''
        },
        {
            url:'/modules/searchindex',
            title:"SearchIndex",
            description:""
        }
    );
    a(
        {
            id:37,
            title:"ReadProject",
            content:"ReadProject",
            description:'',
            tags:''
        },
        {
            url:'/modules/readproject',
            title:"ReadProject",
            description:""
        }
    );
    a(
        {
            id:38,
            title:"Redirect",
            content:"Redirect",
            description:'',
            tags:''
        },
        {
            url:'/modules/redirect',
            title:"Redirect",
            description:""
        }
    );
    a(
        {
            id:39,
            title:"Merge",
            content:"Merge",
            description:'',
            tags:''
        },
        {
            url:'/modules/merge',
            title:"Merge",
            description:""
        }
    );
    a(
        {
            id:40,
            title:"Join",
            content:"Join",
            description:'',
            tags:''
        },
        {
            url:'/modules/join',
            title:"Join",
            description:""
        }
    );
    a(
        {
            id:41,
            title:"Xml",
            content:"Xml",
            description:'',
            tags:''
        },
        {
            url:'/modules/xml',
            title:"Xml",
            description:""
        }
    );
    a(
        {
            id:42,
            title:"Replace",
            content:"Replace",
            description:'',
            tags:''
        },
        {
            url:'/modules/replace',
            title:"Replace",
            description:""
        }
    );
    a(
        {
            id:43,
            title:"Meta",
            content:"Meta",
            description:'',
            tags:''
        },
        {
            url:'/modules/meta',
            title:"Meta",
            description:""
        }
    );
    a(
        {
            id:44,
            title:"MirrorResources",
            content:"MirrorResources",
            description:'',
            tags:''
        },
        {
            url:'/modules/mirrorresources',
            title:"MirrorResources",
            description:""
        }
    );
    a(
        {
            id:45,
            title:"CopyFiles",
            content:"CopyFiles",
            description:'',
            tags:''
        },
        {
            url:'/modules/copyfiles',
            title:"CopyFiles",
            description:""
        }
    );
    a(
        {
            id:46,
            title:"NamedModule",
            content:"NamedModule",
            description:'',
            tags:''
        },
        {
            url:'/modules/namedmodule',
            title:"NamedModule",
            description:""
        }
    );
    a(
        {
            id:47,
            title:"Documents",
            content:"Documents",
            description:'',
            tags:''
        },
        {
            url:'/modules/documents',
            title:"Documents",
            description:""
        }
    );
    a(
        {
            id:48,
            title:"Flatten",
            content:"Flatten",
            description:'',
            tags:''
        },
        {
            url:'/modules/flatten',
            title:"Flatten",
            description:""
        }
    );
    a(
        {
            id:49,
            title:"GroupBy",
            content:"GroupBy",
            description:'',
            tags:''
        },
        {
            url:'/modules/groupby',
            title:"GroupBy",
            description:""
        }
    );
    a(
        {
            id:50,
            title:"Include",
            content:"Include",
            description:'',
            tags:''
        },
        {
            url:'/modules/include',
            title:"Include",
            description:""
        }
    );
    a(
        {
            id:51,
            title:"Sidecar",
            content:"Sidecar",
            description:'',
            tags:''
        },
        {
            url:'/modules/sidecar',
            title:"Sidecar",
            description:""
        }
    );
    a(
        {
            id:52,
            title:"Title",
            content:"Title",
            description:'',
            tags:''
        },
        {
            url:'/modules/title',
            title:"Title",
            description:""
        }
    );
    a(
        {
            id:53,
            title:"Append",
            content:"Append",
            description:'',
            tags:''
        },
        {
            url:'/modules/append',
            title:"Append",
            description:""
        }
    );
    a(
        {
            id:54,
            title:"Highlight",
            content:"Highlight",
            description:'',
            tags:''
        },
        {
            url:'/modules/highlight',
            title:"Highlight",
            description:""
        }
    );
    a(
        {
            id:55,
            title:"HtmlEscape",
            content:"HtmlEscape",
            description:'',
            tags:''
        },
        {
            url:'/modules/htmlescape',
            title:"HtmlEscape",
            description:""
        }
    );
    a(
        {
            id:56,
            title:"MinifyJs",
            content:"MinifyJs",
            description:'',
            tags:''
        },
        {
            url:'/modules/minifyjs',
            title:"MinifyJs",
            description:""
        }
    );
    a(
        {
            id:57,
            title:"AnalyzeCSharp",
            content:"AnalyzeCSharp",
            description:'',
            tags:''
        },
        {
            url:'/modules/analyzecsharp',
            title:"AnalyzeCSharp",
            description:""
        }
    );
    a(
        {
            id:58,
            title:"DirectoryMeta",
            content:"DirectoryMeta",
            description:'',
            tags:''
        },
        {
            url:'/modules/directorymeta',
            title:"DirectoryMeta",
            description:""
        }
    );
    a(
        {
            id:59,
            title:"GenerateFeeds",
            content:"GenerateFeeds",
            description:'',
            tags:''
        },
        {
            url:'/modules/generatefeeds',
            title:"GenerateFeeds",
            description:""
        }
    );
    a(
        {
            id:60,
            title:"Markdown",
            content:"Markdown",
            description:'',
            tags:''
        },
        {
            url:'/modules/markdown',
            title:"Markdown",
            description:""
        }
    );
    a(
        {
            id:61,
            title:"Switch",
            content:"Switch",
            description:'',
            tags:''
        },
        {
            url:'/modules/switch',
            title:"Switch",
            description:""
        }
    );
    a(
        {
            id:62,
            title:"Sass",
            content:"Sass",
            description:'',
            tags:''
        },
        {
            url:'/modules/sass',
            title:"Sass",
            description:""
        }
    );
    a(
        {
            id:63,
            title:"Xmp",
            content:"Xmp",
            description:'',
            tags:''
        },
        {
            url:'/modules/xmp',
            title:"Xmp",
            description:""
        }
    );
    a(
        {
            id:64,
            title:"Sitemap",
            content:"Sitemap",
            description:'',
            tags:''
        },
        {
            url:'/modules/sitemap',
            title:"Sitemap",
            description:""
        }
    );
    a(
        {
            id:65,
            title:"ConcatBranch",
            content:"ConcatBranch",
            description:'',
            tags:''
        },
        {
            url:'/modules/concatbranch',
            title:"ConcatBranch",
            description:""
        }
    );
    a(
        {
            id:66,
            title:"MinifyXhtml",
            content:"MinifyXhtml",
            description:'',
            tags:''
        },
        {
            url:'/modules/minifyxhtml',
            title:"MinifyXhtml",
            description:""
        }
    );
    a(
        {
            id:67,
            title:"Excerpt",
            content:"Excerpt",
            description:'',
            tags:''
        },
        {
            url:'/modules/excerpt',
            title:"Excerpt",
            description:""
        }
    );
    a(
        {
            id:68,
            title:"CsvToHtml",
            content:"CsvToHtml",
            description:'',
            tags:''
        },
        {
            url:'/modules/csvtohtml',
            title:"CsvToHtml",
            description:""
        }
    );
    a(
        {
            id:69,
            title:"Headings",
            content:"Headings",
            description:'',
            tags:''
        },
        {
            url:'/modules/headings',
            title:"Headings",
            description:""
        }
    );
    a(
        {
            id:70,
            title:"MinifyXml",
            content:"MinifyXml",
            description:'',
            tags:''
        },
        {
            url:'/modules/minifyxml',
            title:"MinifyXml",
            description:""
        }
    );
    a(
        {
            id:71,
            title:"OrderBy",
            content:"OrderBy",
            description:'',
            tags:''
        },
        {
            url:'/modules/orderby',
            title:"OrderBy",
            description:""
        }
    );
    a(
        {
            id:72,
            title:"ModuleCollection",
            content:"ModuleCollection",
            description:'',
            tags:''
        },
        {
            url:'/modules/modulecollection',
            title:"ModuleCollection",
            description:""
        }
    );
    a(
        {
            id:73,
            title:"UnwrittenFiles",
            content:"UnwrittenFiles",
            description:'',
            tags:''
        },
        {
            url:'/modules/unwrittenfiles',
            title:"UnwrittenFiles",
            description:""
        }
    );
    a(
        {
            id:74,
            title:"Xslt",
            content:"Xslt",
            description:'',
            tags:''
        },
        {
            url:'/modules/xslt',
            title:"Xslt",
            description:""
        }
    );
    a(
        {
            id:75,
            title:"Index",
            content:"Index",
            description:'',
            tags:''
        },
        {
            url:'/modules/indx',
            title:"Index",
            description:""
        }
    );
    a(
        {
            id:76,
            title:"ForEach",
            content:"ForEach",
            description:'',
            tags:''
        },
        {
            url:'/modules/foreach',
            title:"ForEach",
            description:""
        }
    );
    a(
        {
            id:77,
            title:"Content",
            content:"Content",
            description:'',
            tags:''
        },
        {
            url:'/modules/content',
            title:"Content",
            description:""
        }
    );
    a(
        {
            id:78,
            title:"Sql",
            content:"Sql",
            description:'',
            tags:''
        },
        {
            url:'/modules/sql',
            title:"Sql",
            description:""
        }
    );
    a(
        {
            id:79,
            title:"Objects",
            content:"Objects",
            description:'',
            tags:''
        },
        {
            url:'/modules/objects',
            title:"Objects",
            description:""
        }
    );
    a(
        {
            id:80,
            title:"ReadSolution",
            content:"ReadSolution",
            description:'',
            tags:''
        },
        {
            url:'/modules/readsolution',
            title:"ReadSolution",
            description:""
        }
    );
    a(
        {
            id:81,
            title:"ReplaceIn",
            content:"ReplaceIn",
            description:'',
            tags:''
        },
        {
            url:'/modules/replacein',
            title:"ReplaceIn",
            description:""
        }
    );
    a(
        {
            id:82,
            title:"Json",
            content:"Json",
            description:'',
            tags:''
        },
        {
            url:'/modules/json',
            title:"Json",
            description:""
        }
    );
    a(
        {
            id:83,
            title:"Sort",
            content:"Sort",
            description:'',
            tags:''
        },
        {
            url:'/modules/sort',
            title:"Sort",
            description:""
        }
    );
    a(
        {
            id:84,
            title:"ReadApplicationInput",
            content:"ReadApplicationInput",
            description:'',
            tags:''
        },
        {
            url:'/modules/readapplicationinput',
            title:"ReadApplicationInput",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
