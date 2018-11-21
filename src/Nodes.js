export default [{
  id: "Gamegos Backend Architecture",
  description: "Gamegos Backend Architescture is where the magic happens.",
  value: .5,
  group: "GOS",
  expendable: true,
  inner: {
    nodes: [{
      id: "Kubernetes Pods",
      group: "K8",
      inner: {
        nodes: [{
            id: "All Services",
            group: "ALL",
            inner: {
              nodes: [{
                id: "Other Services",
                group: "svc",
              }, {
                id: "Analytics Services",
                group: "svc",
                inner: {
                  nodes: [{
                    id: "log-collector",
                    gropu: "lc",
                  }, {
                    id: "report-svc",
                    group: "rs",
                  }]
                }
              },]
            }
          }, {
            id: "API Gateway",
            group: "GW",
          },
        ],
      }
    }, {
      id: "ELB (Load Balancer)",
      group: "ELB",
    }, {
      id: "Version Control and Continuous Integration",
      group: "GIT",
      inner: {
        nodes: [{
          id: "fixb.com (Gitlab)",
          group: "git",
        }, {
          id: "Jenkins",
          group: "git",
        }, {
          id: "Consul",
          group: "git",
        }]
      }
    }, {
      id: "Non-Flux Games",
      group: "NFG",
      inner: {
        nodes: [{
          id: "MySQL Slave",
          group: "mysql",
        }, {
          id: "PHP Servers",
          group: "nfg",
        }]
      }
    }, {
      id: "Core Databases",
      group: "CD",
      inner: {
        nodes: [{
          id: "Data (DynamoDB)",
          group: "dynamo",
        }, {
          id: "Leaderboard (Redis)",
          group: "redis",
        }, {
          id: "Cache (Redis)",
          group: "redis",
        }, {
          id: "Payments (MySQL)",
          group: "mysql"
        }]
      } 
    }, {
      id: "Analysis System",
      group: "AS",
      inner: {
        nodes: [{
          id: "RabbitMQ + Logstash Cluster",
          group: "AS",
        }, {
          id: "Elastic Search Cluster (Realtime Data)",
          group: "AS",
        }, {
          id: "Reports (Redshift)",
          group: "AS",
        }, {
          id: "ETL (Daily Analytics Job)",
          group: "AS"
        }, {
          id: "S3LogProcessor (Lambda)",
          group: "AS",
        }, {
          id: "CSV Logs (S3)",
          group: "AS",
        }]
      }
    }, {
      id: "System Logs",
      group: "SL",
    }],
    links: [{
      source: "ELB (Load Balancer)",
      target: "API Gateway",
    }, {
      source: "API Gateway",
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
      target: "Kubernetes Pods",
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