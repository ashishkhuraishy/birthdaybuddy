import json

with open('src/clean-data.json') as f:
    data = json.load(f)
    new = {}
    
    for date in data:
        birthdays = data[date]
        
        for birthday in birthdays:
            if "old" in birthday['birthinfo']:
                birth_year = birthday['description'].split(' ')[0]

                description = birthday['description'].replace(birth_year, f'Born in {birth_year} -')
                birthday['description'] = description
        
            if date not in new:
                new[date] = []
        
            new[date].append(birthday)    


with open('src/data.json', 'w') as f:
    json.dump(new, f, indent=4)
