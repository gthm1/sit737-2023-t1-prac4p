const express = require('express');
const app = express();
const winston = require('winston');


// Defining a Lodger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {service: 'calculator-microservice'},
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});



// Endpoint for addition
app.get('/add', (req, res) => 
{
  const { num1, num2 } = req.query;

  logger.info(`Addition of ${num1} and ${num2}`);

  if (isNaN(num1) || isNaN(num2)) 
  {
    logger.error('Invalid input parameters');
    return res.status(400).json({ error: 'Input Invalid' });
  }

  const output = Number(num1) + Number(num2);

  logger.info(`Result: ${output}`);
  return res.json({ output });
});

// Endpoint for subtraction
app.get('/subtract', (req, res) => 
{
  const { num1, num2 } = req.query;

  logger.info(`Subtraction of ${num1} and ${num2}`);

  if (isNaN(num1) || isNaN(num2)) 
  {
    logger.error('Invalid input parameters');
    return res.status(400).json({ error: 'Please enter valid input parameters' });
  }

  const output = Number(num1) - Number(num2);

  logger.info(`Result: ${output}`);
  return res.json({ output });
});

// Endpoint for multiplication
app.get('/multiply', (req, res) => 
{
  const { num1, num2 } = req.query;

  logger.info(`Multiplication of ${num1} and ${num2}`);

  if (isNaN(num1) || isNaN(num2)) 
  {
    logger.error('Please enter valid input parameters');
    return res.status(400).json({ error: 'Input Invalid' });
  }

  const output = Number(num1) * Number(num2);

  logger.info(`Result: ${output}`);
  return res.json({ output });
});

// Endpoint for division
app.get('/divide', (req, res) => 
{
  const { num1, num2 } = req.query;

  logger.info(`A Division of ${num1} and ${num2}`);

  if (isNaN(num1) || isNaN(num2)) 
  {
    logger.error('Invalid input parameters');
    return res.status(400).json({ error: 'Input Invalid' });
  }

  if (Number(num2) === 0) 
  {
    logger.error('Division by Zero Error');
    return res.status(400).json({ error: 'Cannot divide a number by zero' });
  }

  const output = Number(num1) / Number(num2);
  logger.info(`Result: ${output}`);
  return res.json({ output });
});

// Starting the server
app.listen(3000, () => 
{
  console.log('Server running on port 3000');
});
