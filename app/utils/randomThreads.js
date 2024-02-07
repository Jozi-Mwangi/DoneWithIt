const {faker} = require ("@faker-js/faker")

const generateRandomMessage = () => {
  return {
    id: faker.string.octal({length: 10}),
    thread_id: faker.string.uuid(),
    user_id: faker.string.uuid(),
    agent_id: faker.datatype.boolean() ? faker.string.uuid() : null,
    body: faker.lorem.sentence(),
    timestamp: faker.date.recent().toISOString(),
  };
};

export const generateRandomThreads = (count) => {
    const messages = [];
    for (let i = 0; i<count; i++){
        messages.push(generateRandomMessage())
    }
    return messages;
}

const messages =  generateRandomThreads(2);
console.log(messages);
