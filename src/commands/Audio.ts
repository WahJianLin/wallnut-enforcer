import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  GuildMember,
  InternalDiscordGatewayAdapterCreator,
} from "discord.js";
import { Command } from "./_interfaces";
import { joinVoiceChannel } from "@discordjs/voice";

export const Audio: Command = {
  name: "audio",
  description: "Plays and audio clip",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    const member: GuildMember = interaction.member as GuildMember;
    const targetChannelId: string = member.voice.channelId as string;
    const targetGuildId: string = interaction.guildId as string;
    const targetAdapterCreator: InternalDiscordGatewayAdapterCreator =
      interaction.guild!.voiceAdapterCreator;

    try {
      joinVoiceChannel({
        channelId: targetChannelId,
        guildId: targetGuildId,
        adapterCreator: targetAdapterCreator,
      });
    } catch (error) {
      console.log(error);
    }

    const content: string = "Playing audio";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
