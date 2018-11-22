export default [{
  id: "Gamegos Backend Architecture",
  description: "Gamegos Backend Architescture is where the magic happens.",
  value: .5,
  group: "GOS",
  expendable: true,
  color: "#03A9F4",
  inner: {
    nodes: [{
      id: "Kubernetes Pods",
      color: "#AEEA00",
      group: "K8",
      inner: {
        nodes: [{
            id: "All Services",
            group: "ALL",
            color: "#FF7043",
            inner: {
              nodes: [{
                id: "Other Services",
                group: "svc",
                color: "#FF7043",
              }, {
                id: "Analytics Services",
                group: "svc",
                color: "#FF7043",
                inner: {
                  nodes: [{
                    id: "log-collector",
                    gropu: "lc",
                    color: "#FF7043",
                  }, {
                    id: "report-svc",
                    group: "rs",
                    color: "#FF7043",
                  }]
                }
              },]
            }
          }, {
            id: "API Gateways",
            group: "GW",
            color: "#1DE9B6",
            inner: {
              nodes: [{
                id: "API Gateway",
                group: "GW",
                color: "#1DE9B6"
              }, {
                id: "API Gateway (Internal)",
                group: "GW",
                color: "#1DE9B6"
              }]
            }
          },
        ],
      }
    }, {
      id: "ELB (Load Balancer)",
      group: "ELB",
      color: "#00B0FF",
      inner: {
        nodes: [
          {
            id: "Public ELB (Load Balancer)",
            group: "ELB",
            color: "#00B0FF",
          }, {
            id: "Office ELB (Load Balancer)",
            group: "ELB",
            color: "#00B0FF",
          }
        ]
      }
    }, {
      id: "Version Control and Continuous Integration",
      group: "GIT",
      color: "#1DE9B6",
      inner: {
        nodes: [{
          id: "fixb.com (Gitlab)",
          group: "git",
          color: "#1DE9B6",
        }, {
          id: "Jenkins",
          group: "git",
          color: "#1DE9B6",
        }, {
          id: "Consul",
          group: "git",
          color: "#1DE9B6",
        }]
      }
    }, {
      id: "Non-Flux Games",
      group: "NFG",
      color: "#FF80AB",
      inner: {
        nodes: [{
          id: "MySQL Slave",
          group: "mysql",
          color: "#FF80AB",
        }, {
          id: "PHP Servers",
          group: "nfg",
          color: "#FF80AB",
        }]
      }
    }, {
      id: "Core Databases",
      group: "CD",
      color: "#FFFF00",
      inner: {
        nodes: [{
          id: "Data (DynamoDB)",
          group: "dynamo",
          color: "#FFFF00",
        }, {
          id: "Leaderboard (Redis)",
          group: "redis",
          color: "#FFFF00",
        }, {
          id: "Cache (Redis)",
          group: "redis",
          color: "#FFFF00",
        }, {
          id: "Payments (MySQL)",
          group: "mysql",
          color: "#FFFF00",
        }]
      } 
    }, {
      id: "Analysis System",
      group: "AS",
      color: "#FF1744",
      inner: {
        nodes: [{
          id: "RabbitMQ + Logstash Cluster",
          group: "AS",
          color: "#FF1744",
        }, {
          id: "Elastic Search Cluster (Realtime Data)",
          group: "AS",
          color: "#FF1744",
        }, {
          id: "Reports (Redshift)",
          group: "AS",
          color: "#FF1744",
        }, {
          id: "ETL (Daily Analytics Job)",
          group: "AS",
          color: "#FF1744",
        }, {
          id: "S3LogProcessor (Lambda)",
          group: "AS",
          color: "#FF1744",
        }, {
          id: "CSV Logs (S3)",
          group: "AS",
          color: "#FF1744",
        }]
      }
    }, {
      id: "System Logs",
      group: "SL",
      color: "#CDDC39"
    }],
    links: [{
      source: "Public ELB (Load Balancer)",
      target: "API Gateway",
    },{
      source: "Office ELB (Load Balancer)",
      target: "API Gateway (Internal)",
    }, {
      source: "API Gateway",
      target: "All Services"
    }, {
      source: "API Gateway (Internal)",
      target: "All Services"
    }, {
      source: "All Services",
      target: "System Logs",
    }, {
      source: "All Services",
      target: "Other Services",
    }, {
      source: "Other Services",
      target: "All Services",
    }, {
      source: "All Services",
      target: "log-collector",
    }, {
      source: "log-collector",
      target: "All Services",
    }, {
      source: "All Services",
      target: "report-svc",
    }, {
      source: "report-svc",
      target: "All Services",
    }, {
      source: "Core Databases",
      target: "All Services",
    }, {
      source: "All Services",
      target: "Core Databases",
    }, {
      source: "Core Databases",
      target: "Data (DynamoDB)",
    }, {
      source: "Core Databases",
      target: "Leaderboard (Redis)",
    }, {
      source: "Core Databases",
      target: "Cache (Redis)",
    }, {
      source: "Core Databases",
      target: "Payments (MySQL)",
    }, {
      target: "Core Databases",
      source: "Data (DynamoDB)",
    }, {
      target: "Core Databases",
      source: "Leaderboard (Redis)",
    }, {
      target: "Core Databases",
      source: "Cache (Redis)",
    }, {
      target: "Core Databases",
      source: "Payments (MySQL)",
    }, {
      target: "RabbitMQ + Logstash Cluster",
      source: "PHP Servers",
    },  {
      target: "RabbitMQ + Logstash Cluster",
      source: "log-collector",
    }, {
      source: "RabbitMQ + Logstash Cluster",
      target: "Elastic Search Cluster (Realtime Data)",
    }, {
      source: "Elastic Search Cluster (Realtime Data)",
      target: "ETL (Daily Analytics Job)",
    }, {
      source: "ETL (Daily Analytics Job)",
      target: "Reports (Redshift)",
    }, {
      source: "Reports (Redshift)",
      target: "report-svc",
    },{
      source: "Elastic Search Cluster (Realtime Data)",
      target: "report-svc",
    }, {
      source: "fixb.com (Gitlab)",
      target: "Jenkins",
    }, {
      source: "Consul",
      target: "Jenkins",
    }, {
      source: "Jenkins",
      target: "log-collector",
    }, {
      source: "Jenkins",
      target: "report-svc",
    }, {
      source: "Jenkins",
      target: "Other Services",
    }, {
      source: "MySQL Slave",
      target: "Analysis System",
    }, {
      source: "RabbitMQ + Logstash Cluster",
      target: "CSV Logs (S3)",
    }, {
      target: "CSV Logs (S3)",
      source: "S3LogProcessor (Lambda)",
    }, {
      source: "CSV Logs (S3)",
      target: "S3LogProcessor (Lambda)",
    }, {
      source: "Elastic Search Cluster (Realtime Data)",
      target: "report-svc",
    },]
  },
}];