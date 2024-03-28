export const dataPolicy: any =
{
        PolicyId: "urn:oasis:names:tc:xacml:3.0:example:SimplePolicy1",
        Version: "1.0",
        RuleCombiningAlgId: "identifier:rule-combining-algorithm:deny-overrides",
        Description: "Medi Corp access control policy",
        Rule: [
            {
                RuleId: "urn:oasis:names:tc:xacml:3.0:example:SimpleRule1",
                Effect: "Permit",
                Description: "Any subject with an e-mail name bs@simpsons.com can perform any action on any resource.",
                Target: {
                    AnyOf: [
                        {
                            AllOf: [
                                {
                                    Match: [
                                        {
                                            MatchId: "urn:oasis:names:tc:xacml:1.0:function:string-equal-ignore-case",
                                            DataType: "http://www.w3.org/2001/XMLSchema#string",
                                            Value: "bs@simpsons.com",
                                            AttributeDesignator: {
                                                MustBePresent: false,
                                                Category: "urn:oasis:names:tc:xacml:1.0:subject-category:access-subject",
                                                AttributeId: "urn:oasis:names:tc:xacml:1.0:subject:subject-id",
                                                DataType: "urn:oasis:names:tc:xacml:1.0:data-type:rfc822Name"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    
}