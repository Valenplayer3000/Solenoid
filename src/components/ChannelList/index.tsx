import type { Component} from "solid-js";
import { For } from "solid-js";
import type { Server, Channel } from "revolt.js";
import { css } from "solid-styled-components";
import server_type from "../../assets/servers/servers.json";


import client from "../../assets/servers/client.png";
import server from "../../assets/servers/verified.png"
interface ChannelComponent {
  server: Server;
  channelSetter: (channel_id: string) => void;
  current_channel: Channel | undefined;
}

const ChannelList: Component<ChannelComponent> = (props) => {
  
  return (
    <>
      <div class={"solenoid-server-banner-container"}>
        <div class={css`
          ${props.server.banner ? `background-image: linear-gradient(
    to top,
    var(--sidebar-background) 0%,
    transparent 130%
  ), url(https://autumn.revolt.chat/banners/${props.server.banner?._id})` : `background: transparent`};
          background-size: cover;
          width: 100%;
          height: 20rem;
        `} id="banner">
          <span class="servername">
            {server_type.find((e) => e.id === props.server._id && e.type === "r") && <img src={server} width={24} height={24} />} 
            {server_type.find((e) => e.id === props.server._id && e.type === "s") && <img src={client} width={24} height={24} />}
            {props.server.name}
          </span>
        </div>
      </div>
      <div class="solenoid-channelList">
        <For each={Array.from(props.server.channels.values())}>
          {(channel: Channel | null | undefined) => (
            <div
              class={
                "solenoid-channel " +
                (channel!._id === props.current_channel?._id ? "active" : "")
              }
              id={`channel_${channel!._id}`}
              onClick={() => props.channelSetter(channel!._id)}
            >
              <span class="hashicon">
                {channel?.icon ? (
                  <img
                    width={24}
                    height={24}
                    src={`https://autumn.revolt.chat/icons/${channel.icon?._id}?max_side=256`}
                  />
                ) : (
                  "#"
                )}
              </span>
              <span class="channel_name">{channel!.name}</span>
            </div>
          )}
        </For>
      </div>
    </>
  );
};

export { ChannelList };
