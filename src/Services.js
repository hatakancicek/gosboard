export default [{
  id: "Gamegos Backend Services",
  description: "A deeper look at the services that makes"
    + " multiplayer possible.",
  group: "GOS",
  expendable: true,
  color: "#03A9F4",
  value: .5,
  inner: {
    nodes: [{
        group: "AS",
        color: "#4CAF50",
        id: "Services",
        description: "Backend services run ok Kubernetes. We use Redis, MySQL, DynamoDB as"
          + " our data sources.",
        inner: {
          nodes: [{
            id: "Mamut",
            description: "Our Mamut services",
            color: "#FF1744",
            inner: {
              nodes: [{
                group: "SER",
                id: "adtracking-svc",
                description: "For manitoring our ad campaigns we use adtracking-svc. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "app-svc",
                description: "For providing data of apps. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "auth-svc",
                description: "For providing token to users. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "autoban-svc",
                description: "For banning bad users. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "clan-svc",
                description: "For clans. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "counter-svc",
                description: "For counting. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "customdata-svc",
                description: "For custom data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "dummy-svc",
                description: "Service for showing system dummy. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "event-svc",
                description: "Our new service for events (yeaay). ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "exchange-rate-svc",
                description: "Our new service for events (yeaay). ",
                color: "#FF1744",
              },{
                group: "GTW",
                id: "Gateway",
                description: "Our gateway. ",
                color: "#FF8A80",
              },{
                group: "GTW",
                id: "Gateway (Internal)",
                description: "Our internal gateway. ",
                color: "#FF8A80",
              },{
                group: "SER",
                id: "health-svc",
                description: "Service for showing other services' status. ",
                color: "#FF1744",
              },{
                group: "MNG",
                id: "league-mng",
                description: "Service for leageu manager. ",
                color: "#FF5252",
              },{
                group: "SER",
                id: "league-svc",
                description: "For league data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "message-svc",
                description: "For message data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "panel-svc",
                description: "For panel data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "payment-svc",
                description: "For payment data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "profanity-svc",
                description: "For profanity data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "promo-svc",
                description: "For promo data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "score-svc",
                description: "For score data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "tmpdata-svc",
                description: "For tmpdata data. ",
                color: "#FF1744",
              },{
                group: "SER",
                id: "user-svc",
                description: "For user data. ",
                color: "#FF1744",
              },],
            },
          }, {
            id: "Analytics",
            description: "Analytics services",
            color: "#0277BD",
            group: "ANA",
            inner: {
              nodes: [{
                id: "S3LogProcessor",
                color: "#0277BD",
                group: "ANA",
                description: "Log processor on S3"
              }]
            }
          },{
            id: "Others",
            inner: {
              nodes: [{
                group: "CMS",
                id: "puzzlecafe-cms",
                description: "For puzzlecafe cms. ",
                color: "#F8BBD0",
              },{
                group: "CMS",
                id: "manor-cafe-cms",
                description: "For manor cafe cms. ",
                color: "#F8BBD0",
              },{
                group: "OTS",
                id: "support-svc",
                description: "For support. ",
                color: "#E1BEE7",
              }]
            }
          }]
        }
      },{
        id: "Data Sources",
        description: "Our data sources",
        group: "DB",
        color: "#E8EAF6",
        inner: {
          nodes: [{
            id: "DynamoDB",
            description: "DynamoDB databases",
            group: "DDB",
            color: "#FFFF00",
            inner: {
              nodes: [{
                id: "adtracking (DynamoDB)",
                description: "",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "adtracking_action (DynamoDB)",
                description: "",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "apps (DynamoDB)",
                description: "Table for app-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "client (DynamoDB)",
                description: "Table for auth-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "action_log (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "clan_league (DynamoDB)",
                description: "Table for clan-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "counter_svc (DynamoDB)",
                description: "Table for counter-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "user_app_custom (DynamoDB)",
                description: "Table for customdata-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "event (DynamoDB)",
                description: "Table for event-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "profanity (DynamoDB)",
                description: "Table for profanity-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "message (DynamoDB)",
                description: "Table for message-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "promo_link (DynamoDB)",
                description: "Table for promo-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "promo_log (DynamoDB)",
                description: "Table for promo-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "promo_ad (DynamoDB)",
                description: "Table for promo-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "promo_template (DynamoDB)",
                description: "Table for promo-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "leaderboard (DynamoDB)",
                description: "Table for score-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "user_leaderboard (DynamoDB)",
                description: "Table for score-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "counter (DynamoDB)",
                description: "Table for score-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "user_list (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "staff (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "user_app (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "common (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "user_vendor (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "user_base (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },{
                id: "device (DynamoDB)",
                description: "Table for user-svc",
                group: "DDB",
                color: "#FFFF00",
              },],
            },
          },{
            id: "Elastic Search",
            color: "#00B0FF",
            description: "Elastic Search cluster",
            grup: "ES",
          }, {
            id: "MySQL",
            color: "#1DE9B6",
            description: "MySQL databases",
            group: "MDB",
            inner: {
              nodes: [{
                id: "manor_cafe_cms (MySQL)",
                color: "#1DE9B6",
                description: "manor_cafe_cms database",
                group: "MDB",
              }, {
                id: "puzzlecafe_cms (MySQL)",
                color: "#1DE9B6",
                description: "puzzlecafe_cms database",
                group: "MDB",
              }, {
                id: "clan (MySQL)",
                color: "#1DE9B6",
                description: "clan-svc database",
                group: "MDB",
              },{
                id: "event (MySQL)",
                color: "#1DE9B6",
                description: "clan-svc database",
                group: "MDB",
              },{
                id: "league (MySQL)",
                color: "#1DE9B6",
                description: "league-mng database",
                group: "MDB",
              },{
                id: "panel (MySQL)",
                color: "#1DE9B6",
                description: "panel-svc database",
                group: "MDB",
              },{
                id: "payment_service (MySQL)",
                color: "#1DE9B6",
                description: "payment-mng database",
                group: "MDB",
              },],
            },
          },{
            id: "Redis",
            color: "#B388FF",
            group: "RDB",
            description: "Redis data servers for cache.",
          },{
            id: "S3",
            color: "#FF6F00",
            group: "S3",
            description: "S3 data servers for storage.",
            inner: {
              nodes: [{
                id: "umut_test_bucket (S3)",
                color: "#FF6F00",
                description: "exchange-rate-svc storage",
                group: "S3",
              },{
                id: "gamegos-flux (S3)",
                color: "#FF6F00",
                description: "logstash storage",
                group: "S3",
                inner: {
                  nodes: [{
                    id: "logstash-done (S3)",
                    color: "#FF6F00",
                    description: "logstash formatted storage",
                    group: "S3",
                  }, {
                    id: "logstash-prod (S3)",
                    color: "#FF6F00",
                    description: "logstash unformatted storage",
                    group: "S3",
                  }, {
                    id: "output (S3)",
                    color: "#FF6F00",
                    description: "logstash unformatted csv storage",
                    group: "S3",
                  }]
                }
              },],
            },
          },{
            id: "Outsource",
            color: "#64DD17",
            group: "OUT",
            description: "Sources outside Gamegos.",
            inner: {
              nodes: [{
                id: "Apilayer (Outsource)",
                color: "#64DD17",
                description: "exchange-rate-svc currency source",
                group: "OUT",
              },{
                id: "Freshdesk",
                color: "#64DD17",
                description: "support-svc source",
                group: "OUT",
              }],
            }
          }],
        },
      },],
    links: [{
      source: "adtracking-svc",
      target: "adtracking (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "adtracking-svc",
      source: "adtracking (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      source: "adtracking-svc",
      target: "adtracking_action (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "adtracking-svc",
      source: "adtracking_action (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "app-svc",
      source: "apps (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "apps (DynamoDB)",
      color: "#FFFF00",
      source: "app-svc",
      type: "source",
    },{
      target: "auth-svc",
      source: "client (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "client (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "auth-svc",
    },{
      target: "autoban-svc",
      source: "Elastic Search",
      color: "#00B0FF",
      type: "source",
    },{
      target: "panel-svc",
      source: "Elastic Search",
      color: "#00B0FF",
      type: "source",
    },{
      target: "panel (MySQL)",
      color: "#1DE9B6",
      source: "panel-svc",
      type: "source",
    },{
      target: "panel-svc",
      source: "panel (MySQL)",
      color: "#1DE9B6",
      type: "source",
    },{
      target: "clan (MySQL)",
      color: "#1DE9B6",
      source: "clan-svc",
      type: "source",
    },{
      target: "clan-svc",
      source: "clan (MySQL)",
      color: "#1DE9B6",
      type: "source",
    },{
      target: "clan_league (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "clan-svc",
    },{
      target: "clan-svc",
      source: "clan_league (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "Redis",
      source: "clan-svc",
      type: "source",
      color: "#B388FF",
    },{
      target: "clan-svc",
      source: "Redis",
      type: "source",
      color: "#B388FF",
    },{
      target: "Redis",
      source: "tmpdata-svc",
      type: "source",
      color: "#B388FF",
    },{
      target: "tmpdata-svc",
      source: "Redis",
      type: "source",
      color: "#B388FF",
    },{
      target: "Redis",
      source: "message-svc",
      type: "source",
      color: "#B388FF",
    },{
      target: "message-svc",
      source: "Redis",
      type: "source",
      color: "#B388FF",
    },{
      target: "Redis",
      source: "score-svc",
      type: "source",
      color: "#B388FF",
    },{
      target: "score-svc",
      source: "Redis",
      type: "source",
      color: "#B388FF",
    },{
      target: "message-svc",
      source: "message (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      source: "message-svc",
      target: "message (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "profanity-svc",
      source: "profanity (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      source: "profanity-svc",
      target: "profanity (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "counter_svc (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "counter-svc",
    },{
      target: "counter-svc",
      source: "counter_svc (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "event-svc",
      source: "event (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "event (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "event-svc",
    },{
      target: "event-svc",
      source: "event (MySQL)",
      color: "#1DE9B6",
      type: "source",
    },{
      target: "event (MySQL)",
      color: "#1DE9B6",
      type: "source",
      source: "event-svc",
    },{
      target: "customdata-svc",
      source: "user_app_custom (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "user_app_custom (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "customdata-svc",
    },{
      source: "Apilayer (Outsource)",
      type: "source",
      target: "exchange-rate-svc",
      color: "#64DD17",
    },{
      target: "umut_test_bucket (S3)",
      color: "#FF6F00",
      type: "source",
      source: "exchange-rate-svc",
    },{
      source: "umut_test_bucket (S3)",
      color: "#FF6F00",
      type: "source",
      target: "exchange-rate-svc",
    },{
      source: "league (MySQL)",
      color: "#1DE9B6",
      type: "source",
      target: "league-mng",
    },{
      target: "league (MySQL)",
      color: "#1DE9B6",
      type: "source",
      source: "league-mng",
    },{
      source: "puzzlecafe_cms (MySQL)",
      color: "#1DE9B6",
      type: "source",
      target: "puzzlecafe-cms",
    },{
      target: "puzzlecafe_cms (MySQL)",
      color: "#1DE9B6",
      type: "source",
      source: "puzzlecafe-cms",
    },{
      source: "manor_cafe_cms (MySQL)",
      color: "#1DE9B6",
      type: "source",
      target: "manor-cafe-cms",
    },{
      target: "manor_cafe_cms (MySQL)",
      color: "#1DE9B6",
      type: "source",
      source: "manor-cafe-cms",
    },{
      source: "league (MySQL)",
      color: "#1DE9B6",
      type: "source",
      target: "league-svc",
    },{
      target: "league (MySQL)",
      color: "#1DE9B6",
      type: "source",
      source: "league-svc",
    },{
      source: "payment_service (MySQL)",
      color: "#1DE9B6",
      type: "source",
      target: "payment-svc",
    },{
      target: "payment_service (MySQL)",
      color: "#1DE9B6",
      type: "source",
      source: "payment-svc",
    },{
      target: "promo-svc",
      source: "promo_link (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "promo_link (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "promo-svc",
    },{
      target: "promo-svc",
      source: "promo_log (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "promo_log (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "promo-svc",
    },{
      target: "promo-svc",
      source: "promo_ad (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "promo_ad (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "promo-svc",
    },{
      target: "promo-svc",
      source: "promo_template (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "promo_template (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "promo-svc",
    },{
      target: "score-svc",
      source: "counter (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "counter (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "score-svc",
    },{
      target: "score-svc",
      source: "leaderboard (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "leaderboard (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "score-svc",
    },{
      target: "score-svc",
      source: "user_leaderboard (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "user_leaderboard (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "score-svc",
    },{
      target: "user-svc",
      source: "action_log (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "action_log (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "apps (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "apps (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "common (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "common (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "counter (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "counter (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "user_list (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "user_list (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "staff (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "staff (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "user_app (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "user_app (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "user_vendor (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "user_vendor (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "user_base (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "user_base (DynamoDB)",
      color: "#FFFF00",
      type: "source",
      source: "user-svc",
    },{
      target: "user-svc",
      source: "device (DynamoDB)",
      color: "#FFFF00",
      type: "source",
    },{
      target: "device (DynamoDB)",
      color: "#FFFF00",
      source: "user-svc",
      type: "source",
    },{
      target: "app-svc",
      source: "user-svc",
      color: "#FF1744",
    },{
      target: "auth-svc",
      source: "user-svc",
      color: "#FF1744",
    },{
      target: "adtracking-svc",
      source: "user-svc",
      color: "#FF1744",
    },{
      target: "customdata-svc",
      source: "user-svc",
      color: "#FF1744",
    },{
      target: "score-svc",
      source: "user-svc",
      color: "#FF1744",
    },{
      target: "tmpdata-svc",
      source: "user-svc",
      color: "#FF1744",
    },{
      target: "app-svc",
      source: "tmpdata-svc",
      color: "#FF1744",
    },{
      target: "app-svc",
      source: "score-svc",
      color: "#FF1744",
    },{
      target: "app-svc",
      source: "message-svc",
      color: "#FF1744",
    },{
      target: "clan-svc",
      source: "message-svc",
      color: "#FF1744",
    },{
      target: "clan-svc",
      source: "league-mng",
      color: "#FF1744",
    },{
      target: "league-svc",
      source: "league-mng",
      color: "#FF1744",
    },{
      target: "app-svc",
      source: "health-svc",
      color: "#FF1744",
    },{
      target: "user-svc",
      source: "health-svc",
      color: "#FF1744",
    },{
      target: "customdata-svc",
      source: "health-svc",
      color: "#FF1744",
    },{
      target: "support-svc",
      source: "Freshdesk",
      type: "source",
      color:  "#64DD17",
    },{
      source: "support-svc",
      target: "Freshdesk",
      color:  "#64DD17",
      type: "source",
    },{
      source: "S3LogProcessor",
      target: "output (S3)",
      color:  "#FF6F00",
      type: "source",
    },{
      source: "S3LogProcessor",
      target: "logstash-done (S3)",
      color:  "#FF6F00",
      type: "source",
    },{
      target: "S3LogProcessor",
      source: "logstash-prod (S3)",
      color:  "#FF6F00",
      type: "source",
    },],
  },
}];