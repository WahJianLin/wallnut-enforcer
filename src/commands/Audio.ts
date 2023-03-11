import {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  GuildMember,
  InternalDiscordGatewayAdapterCreator,
} from "discord.js";
import { Command } from "./_interfaces";
import { joinVoiceChannel } from "@discordjs/voice";
import botUtil from "../util/botUtil";

export const Audio: Command = {
  name: "audio",
  description: "Plays and audio clip",
  type: ApplicationCommandType.ChatInput,
  run: async (client: Client, interaction: CommandInteraction) => {
    botUtil.joinTargetChannel(interaction);
    
    const content: string = "Playing audio";
    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
