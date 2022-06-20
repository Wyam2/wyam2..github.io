
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
            title:"Link",
            content:"Link",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/link',
            title:"Link",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"Giphy",
            content:"Giphy",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/giphy',
            title:"Giphy",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"Include",
            content:"Include",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/include',
            title:"Include",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"Table",
            content:"Table",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/table',
            title:"Table",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"Figure",
            content:"Figure",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/figure',
            title:"Figure",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"Embed",
            content:"Embed",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/embed',
            title:"Embed",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"Twitter",
            content:"Twitter",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/twitter',
            title:"Twitter",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"Highlight",
            content:"Highlight",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/highlight',
            title:"Highlight",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"Raw",
            content:"Raw",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/raw',
            title:"Raw",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"YouTube",
            content:"YouTube",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/youtube',
            title:"YouTube",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"Gist",
            content:"Gist",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/gist',
            title:"Gist",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"CodePen",
            content:"CodePen",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/codepen',
            title:"CodePen",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"Meta",
            content:"Meta",
            description:'',
            tags:''
        },
        {
            url:'/shortcodes/meta',
            title:"Meta",
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
