export default [{
  id: "Gamegos Backend Architecture",
  description: "Gamegos Backend Architescture is where the magic happens.",
  value: .5,
  group: "GOS",
  expendable: true,
  color: "#03A9F4",
  inner: {
    nodes: [{
      id: "Games",
      color: '#33eaff',
      description: "Our games.",
      links: {
        Gamegos: "http://www.gamegos.com/games/",
      },
    }, {
      id: "Office",
      color: '#81C784',
      description: "Our office.",
    },{
      id: "Kubernetes Pods",
      description: "For greater scalibility, we use Kubernetes on EC2 to serve our micro-services. "
        + "This way, we can increase or decrease number of pods, which may be imagined as subcontractor"
        + " workers, to serve increasing number of request without a flaw. With the Kubernetes Pods, "
        + " we can easly monitor the status and work loads of different services and different "
        + " workers realtime and take actions if needed to ensure maximum number of success response"
        + " rate.",
      links: {
        Kubernetes: "https://kubernetes.io/",
        EC2: "https://aws.amazon.com/ec2/",
      },
      color: "#AEEA00",
      group: "K8",
      inner: {
        nodes: [{
            id: "All Services",
            group: "ALL",
            color: "#FF7043",
            description: "Gamegos Backend is built on many different services doing simple task each, to create"
              + " a complex infastructure which handles millions of requests everyday. All of our services run "
              + " on Amazon EC2 instances with Kubernetes for scalibility support. Services run on two clusters "
              + " named beta and prod. Beta cluster is for testing new features and fixes before production"
              + " stage for ensuring stability in production.",
            links: {
              EC2: "https://aws.amazon.com/ec2/",
              GoLang: "https://golang.org/",
              Repo: "https://git.fixb.com/mamut",
            },
            inner: {
              nodes: [{
                id: "Other Services",
                group: "svc",
                color: "#FF7043",
                description: "For our backend service architecture, we have chosen to implement micro-service"
                + " architecture. With this implementation, we have produced micro-services for micro-tasks such"
                + " as keeping the leaderboard or counting the scores. Every service is written in GoLang for "
                + " its language capabilities such as concurrency and services have their own databases for"
                + " maximum abstraction.",
                links: {
                  EC2: "https://aws.amazon.com/ec2/",
                  GoLang: "https://golang.org/",
                }
              }, {
                id: "Analytics Services",
                group: "svc",
                color: "#FF7043",
                description: "Providing detailed analysis of millions and millions of user's actions"
                  + " in our games is a hard task to achive. For this purpose, we have implemented"
                  + " our own analysis architecture which uses many different technologies better"
                  + " results. For this task, we mainly depend on game logs and analytic tools for"
                  + " reporting our status in the real world.",
                inner: {
                  nodes: [{
                    id: "log-collector",
                    gropu: "lc",
                    color: "#FF7043",
                    description: "Normally, our services writes their precious logs in their local"
                      + " files. This logs are needed for error reporting and performance mesaures."
                      + " Log-collector collects local logs from services and writes them to Elastic"
                      + " Search for live monitoring and faster debugging.",
                    links: {
                      ElasticSearch: "https://www.elastic.co/",
                      "Gamegos Service Logs": "http://es6.gamegos.net:5601/app/kibana#/discover?_g=()&_a=(columns:!(_source),index:e57cb9c0-6f0b-11e8-b396-2b5e6f3b5b93,interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))",
                      Repo: "https://git.fixb.com/analytics/log-collector-svc",
                    }
                  }, {
                    id: "report-svc",
                    group: "rs",
                    color: "#FF7043",
                    description: "Reports are generated using different data sources"
                      + " and those data sources may change in time. In order to abstract"
                      + " reporting from data sources, reports-svc is built to automaticly"
                      + " integrate our current and possible future data sources with"
                      + " our reporting system. This service makes direct access to data"
                      + " sources from user scope unnacessary.",
                    links: {
                      Repo: "https://git.fixb.com/analytics/report-svc",
                    },
                  },],
                },
              },],
            },
          }, {
            id: "API Gateways",
            group: "GW",
            color: "#1DE9B6",
            description: "API Gateway lays between the source of the request and the service which responds. Before "
              + " any request reaches the target service, API Gateway does the necessary controls and automaticly "
              + " responds with error if the authentication requirements are not met. Some internal services and "
              + " some non-mamut services do not use API Gateway. API Gateway is built on OpenResty and is written"
              + " with Lua.",
            links: {
              OpenResty: "https://openresty.org/en/",
              Lua: "https://www.lua.org/",
              Repo: "https://git.fixb.com/mamut/gateway",
            },
            inner: {
              nodes: [{
                id: "API Gateway",
                group: "GW",
                color: "#1DE9B6",
                description: "Public API Gateway is used by public requests.",
              }, {
                id: "API Gateway (Internal)",
                group: "GW",
                color: "#1DE9B6",
                description: "Internal API Gateway is used by internal requests."
              }]
            },
          },
        ],
      },
    }, {
      id: "ELB (Load Balancer)",
      group: "ELB",
      color: "#00B0FF",
      description: "For distrubitng millions of requests to limited number of machines, ELB service of"
        + " Amazon is used. Main purpose of this service is to ensure that each given machine or instance "
        + "recieves optimal number of request each for greater efficency. ELB is based on HAProxy.",
      links: {
        ELB: "https://aws.amazon.com/elasticloadbalancing/",
        HAProxy: "http://www.haproxy.org/",
      },
      inner: {
        nodes: [
          {
            id: "Public ELB (Load Balancer)",
            description: "Public ELB is used for public load balancing.",
            group: "ELB",
            color: "#00B0FF",
          }, {
            id: "Office ELB (Load Balancer)",
            description: "Office ELB is used for internal load balancing.",
            group: "ELB",
            color: "#00B0FF",
          },
        ],
      },
    }, {
      id: "CI/CD",
      group: "GIT",
      color: "#1DE9B6",
      description: "For version control, Gamegos uses git. We host our own version control backend for"
        + " faster development and secure hosting of source codes. With the recent updates, we have"
        + " upgraded our version control system to automaticly implement continous integration "
        + " with code pipelines provided by gitlab.",
      links: {
        Gitlab: "https://about.gitlab.com/product/",
        CI: "https://about.gitlab.com/product/continuous-integration/",
      },
      inner: {
        nodes: [{
          id: "git.fixb.com (Gitlab)",
          description: "This is the main host of our version control system. It hosts all of our backend"
            + "source codes along with the workers for CI. Tags are used for automatic deployment. Mainly"
            + " we use tags without beta for production deployment and tags with beta for beta clusters"
            + " deployment.",
          group: "git",
          color: "#1DE9B6",
          links: {
            GitLab: "https://gitlab.com",
            "Gamegos GitLab": "https://git.git.fixb.com",
          },
        }, {
          id: "Jenkins",
          description: "Old node for CI. Services are being migrated to use gitlab CI for simpler"
            + " development operations. Jenkins is controlled by hand while gitlab CI is automatic"
            + " with hooks from tags. Jenkins also provides recovery and downgrading to older versions"
            + " which is curucial in many situations.",
          links: {
            Jenkins: "https://jenkins.io/",
            "Gamegos Jenkins": "https://ci2.fixb.com/",
          },
          group: "git",
          color: "#1DE9B6",
        }, {
          id: "Consul",
          group: "git",
          color: "#1DE9B6",
          description: "Keys are dangerous. Keys shall never be public. Keys have greate power."
            + " Keys bring ease of identification. Keys bring great danger. Keys shall be hosted"
            + " with greate care. That is the reason we host keys in a secure way, locally in a "
            + "closed system, OUT OF OUR SOURCE CODE. Services reach keys during the build stage,"
            + " right before starting up. With this, any time a key is updated, the service which"
            + " uses that key chall also be rebuilt for using the new key. Along with keys, we also"
            + " store our config data under a unified key-value system called Consul. In this system"
            + " we host different values for beta and production. The service decides to use one of"
            + " them depending on its cluster.",
          links: {
            Consul: "https://learn.hashicorp.com/consul/getting-started/ui.html",
            "Gamegos Consul": "http://consul.fixb.com:8500/ui/#/gamegos/kv/",
          },
        },],
      },
    }, {
      id: "Non-Flux Games",
      group: "NFG",
      color: "#FF80AB",
      description: "Those are the games from pre-flux era. Many of our old games use old technologies "
        + " for their backend and have different architectures, each built with a single game in mind."
        + " Our new architecture is built with the goal of serving our games with a unified backend"
        + " structure. Those games haven't been updated to use new technologies because of the"
        + " development costs.",
      inner: {
        nodes: [{
          id: "MySQL Slave",
          group: "mysql",
          color: "#FF80AB",
          description: "Those games have their own MySQL databases for holding the game data. Those databases"
            + " are accesessed by the game's PHP backend."
        }, {
          id: "PHP Servers",
          group: "nfg",
          color: "#FF80AB",
          description: "All the necessary calculations for our old games are made using PHP as the"
            + " backend. Those servers access MySQL slaves for hasting game data. Gamegos since have"
            + " chosen to quit using PHP for a healthy living. Our new backend is built with almighty"
            + " GoLang.",
        },],
      },
    }, {
      id: "Core Databases",
      group: "CD",
      color: "#FFFF00",
      description: "For better abstraction, we have seperated our databases away from our services."
        + " Each of our services have their own tables and some of them have their own cache"
        + " mechanisms for specific needs.",
      inner: {
        nodes: [{
          id: "Data (DynamoDB)",
          description: "Main source of our user data. DynamoDB is a NoSQL database with greate scalibility."
            + " It is hosted on Amozon. We increase and decrease its capacity based on expected loads"
            + " regularly. We also have alarms on its work load for detecting failures before"
            +  " they happen.",
          group: "dynamo",
          color: "#FFFF00",
        }, {
          id: "Leaderboard (Redis)",
          description: "Sorting is a hard duty. Our leaderboard service heavily depends on"
            + " sorted values. For faster sorting, we use Redis to sort values using"
            + " memory, unlike usual databases which uses storage units linke DynamoDB.",
          group: "redis",
          color: "#FFFF00",
        }, {
          id: "Cache (Redis)",
          group: "redis",
          color: "#FFFF00",
          description: "Any service that needs caching mechanism uses Redis for"
            + " this purpose. Redis is simply a database which runs on memory."
            + " It is used to host smaller amount of data, compared to SQL or NoSql"
            + " databes. Bu the response times our much quicker when Redis is used."
            + " It has greater costs for hosting the same amount of data.",
        }, {
          id: "MySQL",
          group: "mysql",
          color: "#FFFF00",
          description: "We use SQL (MySQL) for hosting some of our data. This is"
            + " mainly beacuse the queries we make on payment, clan and league "
            + "data is well suited for SQL.",
        },],
      },
    }, {
      id: "Analysis System",
      group: "AS",
      color: "#FF1744",
      description: "Analysis system is the cluster of services and data sources that provide"
        + " short and long termed reports of game logs. System is responsible of storing,"
        + " parsing and serving meaningful reports and sums based on the logs provided"
        + " by games and services.",
      inner: {
        nodes: [{
          id: "RabbitMQ + Logstash Cluster",
          group: "AS",
          color: "#FF1744",
          description: "First step of processing game logs is to queue them with RabbitMQ"
            + " and to consume them with Logstash. RabbitMQ provides stable stream of logs"
            + " while Logstash provides multi-targeted log writing with Elastic Search and"
            + " S3 as destinatins.",
          links: {
            RabbitMQ: "https://www.rabbitmq.com/",
            Logstash: "https://www.elastic.co/products/logstash",
          },
        }, {
          id: "Elastic Search Cluster (Realtime Data)",
          group: "AS",
          color: "#FF1744",
          description: "We use Elastic-Search clusters to monitor user activity and set"
            + " alarms based on real-time logs for early error detection in our services."
            + " Logs under elastic search are indexed using many different parametres,"
            + " inluding but not limited to channel, type, date and cluster.",
          links: {
            ElasticSearch: "https://www.elastic.co/",
            "Gamegos Elastic Search": "http://es6.gamegos.net:5601/app/kibana",
          },
        }, {
          id: "Reports (Redshift)",
          group: "AS",
          color: "#FF1744",
          description: "Redshift is our data warehouse. It is used for writing"
            + " and querying large amounts (GBs) of data. Every 3 hours, logs"
            + " are updated by collecting logs from Elastic Search and S3. Logs"
            + " from Elastic Search are delivered by ETL after being formatted "
            + " while logs from S3 are recieved directly since they are already"
            + " formatted by S3LogProcessor."
        }, {
          id: "ETL (Daily Analytics Job)",
          group: "AS",
          color: "#FF1744",
          description: "ETL is Extract, Transform and Load duties triggered"
            + " periodically for formatting logs and storing them in Redshift."
            + " Main purpose of this service is to format and dump logs from"
            + " ES to Redshift and trigger Redshift to collect logs from S3.",
          links: {
            ETL: "http://www.wikizeroo.net/index.php?q=aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXh0cmFjdCxfdHJhbnNmb3JtLF9sb2Fk",
            Repo: "https://git.fixb.com/analytics/etl",
          }
        }, {
          id: "S3LogProcessor (Lambda)",
          group: "AS",
          color: "#FF1744",
          description: "Logstash writes game logs to S3 unformatted. Those logs need to be formatted"
            + " prior to their usage in report production. For this duty, we use a lambda function"
            + " which is triggered automaticly when a new entry is added to S3. It reads the"
            + " source of the trigger and formats it for report production.",
          links: {
            Lambda: "https://aws.amazon.com/lambda/",
            Repo: "https://git.fixb.com/analytics/s3-log-processor",
          }
        }, {
          id: "S3",
          group: "AS",
          color: "#FF1744",
          description: "S3 is a simple storage service provided by AWS. We use S3 for storing"
            + " our logs and reports. Logs are initially unformatted when they are first"
            + " written by Logstash. After their initial entry, logs are automaticly formatted"
            + " by S3LogProcessor.",
          links: {
            S3: "https://aws.amazon.com/s3/",
          },
        }, {
          id: "User Operations",
          group: "AS",
          color: "#FF1744",
          description: "User Operations provide real-time user information based on"
            + " data it gathers from user-svc and MySQL slaves of Non-Flux games."
            + " It writes user data to Elastic Search for live monitoring.",
          links: {
            Repo: "https://git.fixb.com/analytics/useroperations",
          },
        },],
      },
    }, {
      id: "System Logs",
      group: "SL",
      color: "#CDDC39"
    },],
    links: [{
      source: "Public ELB (Load Balancer)",
      target: "API Gateway",
      data: "Distributed Requests",
    },{
      source: "Office ELB (Load Balancer)",
      target: "API Gateway (Internal)",
      data: "Distributed Internal Requests",
    }, {
      source: "API Gateway",
      target: "Other Services",
      data: "Authorization Checked Requests"
    }, {
      source: "API Gateway",
      target: "report-svc",
      data: "Authorization Checked Requests"
    }, {
      source: "API Gateway (Internal)",
      target: "Other Services",
      data: "Authorization Checked Internal Requests"
    }, {
      source: "API Gateway (Internal)",
      target: "report-svc",
      data: "Authorization Checked Internal Requests"
    }, {
      source: "report-svc",
      target: "System Logs",
      data: "Service Logs",
    }, {
      source: "Other Services",
      target: "System Logs",
      data: "Service Logs",
    }, {
      source: "log-collector",
      target: "System Logs",
      data: "Service Logs",
    }, {
      source: "Core Databases",
      target: "Other Services",
      data: "Service Data",
    }, {
      target: "Core Databases",
      source: "Other Services",
      data: "Service Data",
    }, {
      source: "Core Databases",
      target: "Data (DynamoDB)",
      data: "Service Data",
    }, {
      source: "Core Databases",
      target: "Leaderboard (Redis)",
      data: "Leaderboard Data",
    }, {
      source: "Core Databases",
      target: "Cache (Redis)",
      data: "Service Data",
    }, {
      source: "Core Databases",
      target: "MySQL",
      data: "Service Data",
    }, {
      target: "Core Databases",
      source: "Data (DynamoDB)",
      data: "Service Data",
    }, {
      target: "Core Databases",
      source: "Leaderboard (Redis)",
      data: "Leaderboard Data",
    }, {
      target: "Core Databases",
      source: "Cache (Redis)",
      data: "Service Data",
    }, {
      target: "Core Databases",
      source: "MySQL",
      data: "Service Data",
    }, {
      target: "RabbitMQ + Logstash Cluster",
      source: "PHP Servers",
      data: "Game Logs",
    },  {
      target: "RabbitMQ + Logstash Cluster",
      source: "log-collector",
      data: "Service Logs",
    }, {
      source: "RabbitMQ + Logstash Cluster",
      target: "Elastic Search Cluster (Realtime Data)",
      data: "Logs",
    }, {
      source: "Elastic Search Cluster (Realtime Data)",
      target: "ETL (Daily Analytics Job)",
      data: "Unformatted Logs",
    }, {
      source: "ETL (Daily Analytics Job)",
      target: "Reports (Redshift)",
      data: "Formatted Elastic Search Logs",
    }, {
      source: "Reports (Redshift)",
      target: "report-svc",
      data: "Logs",
    },{
      source: "Elastic Search Cluster (Realtime Data)",
      target: "report-svc",
      data: "Realtime Logs And User Data",
    }, {
      source: "git.fixb.com (Gitlab)",
      target: "Jenkins",
      data: "Source Codes for Docker Build",
    }, {
      source: "Consul",
      target: "Jenkins",
      data: "Key-Value Pairs for Docker Build",
    }, {
      source: "Jenkins",
      target: "log-collector",
      data: "Build Logs",
    }, {
      source: "Jenkins",
      target: "report-svc",
      data: "report-svc Build",
    }, {
      source: "Jenkins",
      target: "Other Services",
      data: "Service Builds",
    }, {
      source: "MySQL Slave",
      target: "PHP Servers",
      data: "Game Data",
    },  {
      target: "MySQL Slave",
      source: "PHP Servers",
      data: "Game Data",
    },  {
      source: "MySQL Slave",
      target: "User Operations",
      data: "User Information",
    }, {
      source: "Other Services",
      target: "User Operations",
      data: "User Information",
    }, {
      source: "RabbitMQ + Logstash Cluster",
      target: "S3",
      data: "Unformatted Game Logs",
    }, {
      target: "S3",
      source: "S3LogProcessor (Lambda)",
      data: "Formatted Game Logs",
    }, {
      source: "S3",
      target: "Reports (Redshift)",
      data: "Formatted Game Logs",
    }, {
      source: "S3",
      target: "S3LogProcessor (Lambda)",
      data: "Unformatted Game Logs",
    }, {
      source: "Elastic Search Cluster (Realtime Data)",
      target: "report-svc",
      data: "Realtime Data",
    }, {
      target: "Elastic Search Cluster (Realtime Data)",
      source: "User Operations",
      data: "User Information",
    }, {
      target: "RabbitMQ + Logstash Cluster",
      source: "Games",
      data: "Game Logs",
    }, {
      target: "Public ELB (Load Balancer)",
      source: "Games",
      data: "Game Requests",
    }, {
      target: "Office ELB (Load Balancer)",
      source: "Office",
      data: "Internal Requests",
    }, {
      target: "git.fixb.com (Gitlab)",
      source: "Office",
      data: "Source Code Updates",
    }, {
      source: "git.fixb.com (Gitlab)",
      target: "Office",
      data: "Source Code History",
    }, {
      target: "Consul",
      source: "Office",
      data: "Key-Value Updates",
    }, {
      source: "Consul",
      target: "Office",
      data: "Key-Value status",
    }],
  },
}];