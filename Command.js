import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE4MTg1ODA4NDg0MzQ0MjI3Ng.GqyfRp.ZAmKg3C_MdSsazPsH1sxcLbM50lAVjkc3AMZSQ");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1181858084843442276"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}