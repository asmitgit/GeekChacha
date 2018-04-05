//This will be used to prvide the config
//QA-http://10.0.29.223:5556
//Live-http://10.72.179.218:8850
//Dev-http://localhost:55235/
//http://qamatrixapi.policybazaar.com/CommBox/
var config = {
    serviceURL: "http://localhost:55235/", commService: "http://qamatrixapi.policybazaar.com/CommBox/"
};

var InsurerImage = {
    "1": "http://health.policybazaar.com/images/supplier-logo-png/religare.png"
};


//define([], function () {
//    return {
//        "environment": "D",
//        "timeout": {
//            "s": 3000,
//            "m": 6000,
//            "l": 12000
//        },
//        "connectionString": {
//            "D": "http://localhost:50393/",
//            "Q": "http://qamatrixapi.policybazaar.com/MRS/",
//            "U": "http://uatmatrixapi.policybazaar.com/MRS/",
//            "L": "http://api1.policybazaar.com/MRS/"
//        }
//    }
//});
var UserMgmtData = {
    "UserRoleName": [{ "ID": 1, "Name": "Admin" },
                      { "ID": 2, "Name": "Agent" }],

    "UserTypeName": [{ "ID": 1, "Name": "PB User" },
                   { "ID": 2, "Name": "Insurer" }],

    //"ApplicationType": [{ "ID": 1, "Name": "HealthEx" }, { "ID": 2, "Name": "Inspection" }, { "ID": 3, "Name": "Agent Score" }],
    //"Products": [{ "ID": 2, "Name": "Health" }, { "ID": 117, "Name": "Motor" }],
    "ButtonLabel": { "Register": "Register", "Update": "Update", "Edit": "Edit", "Submit": "Submit" }


};

var MasterDocumentList = [{ "DocumentId": 1, "Document": "Past Medical Reports" },
                            { "DocumentId": 2, "Document": "Medical Prescription" },
                            { "DocumentId": 3, "Document": "Discharge Summary" },
                            { "DocumentId": 4, "Document": "Others" }];

var CommonData = {
    "SearchParameter": [{ "ID": 0, "Name": "Select One" }, { "ID": 1, "Name": "Old LeadID" },
                        { "ID": 2, "Name": "CustomerID" }, { "ID": 3, "Name": "Old Proposal#" },
                        { "ID": 4, "Name": "Proposer Name" }]

    , "DateRange": [{ "ID": 0, "Name": "Select One" }, { "ID": 1, "Name": "Today" },
                    { "ID": 2, "Name": "Last 7 Days" }, { "ID": 3, "Name": "Last 15 Days" },
                    { "ID": 4, "Name": "Last 30 Days" }, { "ID": 5, "Name": "Select Date Range" }]

    , "SearchParameterPBDashboard": [{ "ID": 0, "Name": "Select One" }, { "ID": 1, "Name": "Old LeadID" },
                                    { "ID": 2, "Name": "New LeadID" }, { "ID": 3, "Name": "Old Proposal#" },
                                    { "ID": 4, "Name": "CustomerID" }, { "ID": 5, "Name": "New Proposal#" },
                                    { "ID": 6, "Name": "Proposer Name" }]

   , "PBDashboardStatus": [{ "ID": 0, "Name": "Select One" }, { "ID": 1, "Name": "Open" },
                            { "ID": 2, "Name": "Closed" }]

   , "PBDashboardKey": [{ "ID": 0, "Name": "Select One" }, { "ID": 1, "Name": "Insurer Accepted" },
                        { "ID": 2, "Name": "Insurer Rejected" }, { "ID": 3, "Name": "Customer Accepted" },
                        { "ID": 4, "Name": "Customer Rejected" }, { "ID": 5, "Name": "Pending from Insurer" },
                        { "ID": 6, "Name": "Pending from Customer" }
   ]
    , "InsurerDashboardStatus": [{ "ID": 0, "Name": "Select One" }, { "ID": 1, "Name": "U/W Pending" },
                                    { "ID": 2, "Name": "U/W Done" },{ "ID": 3, "Name": "Closed" }]

   , "InsurerDashboardKey": [{ "ID": 0, "Name": "Select One" }, { "ID": 1, "Name": "Willing to Accept" },
                            { "ID": 2, "Name": "Rejected" }, { "ID": 3, "Name": "Willing to Accept with Conditions" },
                            { "ID": 4, "Name": "Pending" }, { "ID": 5, "Name": "Closed" }
   ],
   "SearchInsurerParameter": [{ "ID": 0, "Name": "Select One" },
                        { "ID": 2, "Name": "CustomerID" }, { "ID": 3, "Name": "Proposal#" },
                        { "ID": 4, "Name": "Proposer Name" }
   ],
   "ButtonLabel": { "Search": "Search", "MarkHealthEx": "Mark Health Ex", "Proceed": "Proceed" },

   "InsurerImage": { "1": "https://www.codeproject.com/script/Membership/ProfileImages/%7B80041f7f-a484-416c-91e3-2498b07deb4c%7D.JPG" },

   "InsurersList": [{ "InsurerID": 1, "Name": "Baxa" }],

};
