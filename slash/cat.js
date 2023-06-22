/*const colors = require("colors");
const { MessageEmbed } = require("discord.js");
const SlashCommand = require("../../lib/SlashCommand");
const got = require('got');

const command = new SlashCommand()
    .setName("cat")
    .setDescription("Shows random cats on the internet!")
    .setRun(async (client, interaction) => {
        async function cat() {
            await fetch('https://www.reddit.com/r/cats/random/.json')
                .then(async r => {
                    let cat = await r.json();
                    let catImage = cat[0].data.children[0].data.url;
                    let catTitle = cat[0].data.children[0].data.title;
                    let catUpvotes = cat[0].data.children[0].data.ups;
                    let catDownvotes = cat[0].data.children[0].data.downs;
                    let catNumComments = cat[0].data.children[0].data.num_comments;

                    const embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`${catTitle}`)
                        .setImage(`${catImage}`)
                        .setURL(`${catImage}`)
                        .setFooter(`⬆️ ${catUpvotes} ⬇️ ${catDownvotes}`)

                    return interaction.reply({ embeds: [embed] });

                })

        }
        cat();
    });

module.exports = command;
*/