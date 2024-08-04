from pymongo import MongoClient
import json
from datetime import datetime

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['linkedin_profiles']
collection = db['sample']

def datetime_converter(o):
    if isinstance(o, datetime):
        return o.isoformat()
    raise TypeError("Type not serializable")

# Define search keywords
company_name = "Amazon"
job_title = "Business Analyst"

# Construct the query to search across multiple fields
query = {
    '$and': [
        {
        '$or': [
        {'linkedinProfileUrl': {'$regex': company_name, '$options': 'i'}},
        {'linkedinProfile': {'$regex': company_name, '$options': 'i'}},
        {'description': {'$regex': company_name, '$options': 'i'}},
        {'headline': {'$regex': company_name, '$options': 'i'}},
        {'location': {'$regex': company_name, '$options': 'i'}},
        {'imgUrl': {'$regex': company_name, '$options': 'i'}},
        {'firstName': {'$regex': company_name, '$options': 'i'}},
        {'lastName': {'$regex': company_name, '$options': 'i'}},
        {'fullName': {'$regex': company_name, '$options': 'i'}},
        {'subscribers': {'$regex': company_name, '$options': 'i'}},
        {'connectionDegree': {'$regex': company_name, '$options': 'i'}},
        {'vmid': {'$regex': company_name, '$options': 'i'}},
        {'userId': {'$regex': company_name, '$options': 'i'}},
        {'linkedinSalesNavigatorUrl': {'$regex': company_name, '$options': 'i'}},
        {'connectionsCount': {'$regex': company_name, '$options': 'i'}},
        {'connectionsUrl': {'$regex': company_name, '$options': 'i'}},
        {'mutualConnectionsUrl': {'$regex': company_name, '$options': 'i'}},
        {'isOpenLink': {'$regex': company_name, '$options': 'i'}},
        {'isOpenToWork': {'$regex': company_name, '$options': 'i'}},
        {'isHiring': {'$regex': company_name, '$options': 'i'}},
        {'company': {'$regex': company_name, '$options': 'i'}},
        {'companyUrl': {'$regex': company_name, '$options': 'i'}},
        {'jobTitle': {'$regex': company_name, '$options': 'i'}},
        {'jobLocation': {'$regex': company_name, '$options': 'i'}},
        {'linkedinProfileUrl': {'$regex': job_title, '$options': 'i'}},
        {'linkedinProfile': {'$regex': job_title, '$options': 'i'}},
        {'description': {'$regex': job_title, '$options': 'i'}},
        {'headline': {'$regex': job_title, '$options': 'i'}},
        {'location': {'$regex': job_title, '$options': 'i'}},
        {'imgUrl': {'$regex': job_title, '$options': 'i'}},
        {'firstName': {'$regex': job_title, '$options': 'i'}},
        {'lastName': {'$regex': job_title, '$options': 'i'}},
        {'fullName': {'$regex': job_title, '$options': 'i'}},
        {'subscribers': {'$regex': job_title, '$options': 'i'}},
        {'connectionDegree': {'$regex': job_title, '$options': 'i'}},
        {'vmid': {'$regex': job_title, '$options': 'i'}},
        {'userId': {'$regex': job_title, '$options': 'i'}},
        {'linkedinSalesNavigatorUrl': {'$regex': job_title, '$options': 'i'}},
        {'connectionsCount': {'$regex': job_title, '$options': 'i'}},
        {'connectionsUrl': {'$regex': job_title, '$options': 'i'}},
        {'mutualConnectionsUrl': {'$regex': job_title, '$options': 'i'}},
        {'isOpenLink': {'$regex': job_title, '$options': 'i'}},
        {'isOpenToWork': {'$regex': job_title, '$options': 'i'}},
        {'isHiring': {'$regex': job_title, '$options': 'i'}},
        {'company': {'$regex': job_title, '$options': 'i'}},
        {'companyUrl': {'$regex': job_title, '$options': 'i'}},
        {'jobTitle': {'$regex': job_title, '$options': 'i'}},
        {'jobLocation': {'$regex': job_title, '$options': 'i'}}
    ]
}
    ]
}

# Perform the query
filtered_profiles = collection.find(query)

# Convert results to a list and manually handle ObjectId
profiles_list = []
for profile in filtered_profiles:
    profile['_id'] = str(profile['_id'])  # Convert ObjectId to string
    profiles_list.append(profile)

# Print number of results and sample profiles
print(f"Number of profiles found: {len(profiles_list)}")
#for profile in profiles_list:
    #print(profile)

json_profiles = json.dumps(profiles_list, default=datetime_converter)
print(json_profiles)