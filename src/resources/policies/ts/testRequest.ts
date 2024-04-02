export const dataRequest: any =
{
    ReturnPolicyIdList: true,
    CombinedDecision: false,
    Category: [
        {
            CategoryId: "urn:oasis:names:tc:xacml:1.0:subject-category:access-subject",
            Attribute: [
                {
                    IncludeInResult: false,
                    AttributeId: "urn:oasis:names:tc:xacml:1.0:subject:subject-id",
                    Value: "bs@simpsons.com",
                    DataType: "urn:oasis:names:tc:xacml:1.0:data-type:rfc822Name"
                }
            ]
        },
        {
            CategoryId: "urn:oasis:names:tc:xacml:3.0:attribute-category:resource",
            Attribute: [
                {
                    IncludeInResult: false,
                    AttributeId: "urn:oasis:names:tc:xacml:1.0:resource:resource-id",
                    Value: "file://example/med/record/patient/BartSimpson",
                    DataType: "http://www.w3.org/2001/XMLSchema#anyURI"
                }
            ]
        },
        {
            CategoryId: "urn:oasis:names:tc:xacml:3.0:attribute-category:action",
            Attribute: [
                {
                    IncludeInResult: false,
                    AttributeId: "urn:oasis:names:tc:xacml:1.0:action:action-id",
                    Value: "read",
                    DataType: "http://www.w3.org/2001/XMLSchema#string"
                }
            ]
        }
    ]
    
}