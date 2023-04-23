## ChatBOT

The ChatBot is activated through a trigger message sent via a WhatsApp chat link, from which its customer service flow is initialized.
The trigger message link can be created through this website
https://zap.convertte.com.br/gerador-link-whatsapp/.

## Usage:
  - Instal the dependencies:
  ```
  npm install
```
  - Start the application
  ```
  npm start
```
    
### Tutorial:
  - The trigger message must be passed to the variable named "gatilho".
  - Scan the QR code generated in the terminal on the WhatsApp you want to host the bot.
  - Send the trigger message to the contact where the login was performed.

## Conversation Flow:
  1. Welcome the user.
  2. Ask for the customer's name.
  3. Retrieve the customer's name and store it in a variable.
  4. Respond: Welcome, {customer_name}.
  5. Ask for the size of the pizza.
  6. Present the menu options.
  7. Ask if the customer wants any drinks.
  8. If yes, present the menu options, otherwise continue to the next step.
  9. Ask if the customer will pick up the order or wants it delivered.
  10. If yes, ask for the address and inform the delivery fee; if not, inform the wait time and the address of the pizzeria.
  11. Thank the customer for choosing the pizzeria and ask them to wait.
