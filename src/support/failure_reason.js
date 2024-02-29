const failure_reason = [  
    {  
        "Failure Reason": "Element not found",
        "CustomErrorID": "dHr5bcvkSi",
        "StackTraceErrors":[  
            "(Error : Can't call (.+) on element with selector \"(.*)\" because element wasn't found)",
            "(Error : element (.*) still not existing after (.*))"
        ],
        "CustomFields" : { "JiraID":"1234","status-ticket":"Inprogress"},
        "Tags" : ["Known-Defect"]
    }

];

export default failure_reason;