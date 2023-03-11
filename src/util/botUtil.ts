import { joinVoiceChannel } from "@discordjs/voice";
import { CommandInteraction, GuildMember, InternalDiscordGatewayAdapterCreator } from "discord.js";

export default class botUtil {
  static joinTargetChannel(interaction: CommandInteraction) {
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
  }
}
