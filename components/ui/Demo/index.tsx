import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Button from '../Button';
import { Separator } from '../separator';
import { ScrollArea, ScrollBar } from '../scroll-area';
import { Fa500Px, FaBookOpen, FaBookmark, FaComments, FaGitter, FaLeaf, FaLemon, FaOpencart, FaRobot, FaUsers } from 'react-icons/fa';

type Props = {};

const Demo = (props: Props) => {
  return (
    <div className="h-full border border-zinc-800  max-w-6xl mx-auto rounded-2xl  pt-6 ">
      <Tabs defaultValue="prompts" className="h-full ">
        <div className="space-between justify-center  border-b border-zinc-800 flex items-start">
          <TabsList className=" bg-transparent items-start relative bottom-3 space-x-5">
            <TabsTrigger
              value="prompts"
              className="relative bg-transparent data-[state=active]:text-pink-600 data-[state=active]:rounded-full data-[state=active]:bg-pink-600/25 p-2 "
            >
              <FaGitter size={20} />
            </TabsTrigger>
            <TabsTrigger
              value="comments"
              className="relative bg-transparent data-[state=active]:text-pink-600 data-[state=active]:rounded-full data-[state=active]:bg-pink-600/25 p-2 "
            >
              <FaUsers size={20} />
            </TabsTrigger>
            <TabsTrigger
              value="bot"
              className="relative bg-transparent data-[state=active]:text-pink-600 data-[state=active]:rounded-full data-[state=active]:bg-pink-600/25 p-2 "
            >
              <FaRobot size={20} />
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="prompts"
          style={{
            height: 'calc(100% - 3.5rem)',
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor:
              'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))'
          }}
          className="border-none my-0 pb-10 pt-5 rounded-b-2xl outline-none px-4 lg:px-8  bg-gradient-to-bl from-gray-700 via-gray-900 to-black "
        >
          <div className="flex flex-col items-start rounded-2xl md:p-8 p-4 bg-black">
            <div className="flex items-center justify-between ">
              <div className=" items-center flex space-x-3">
                <div className="  ">
                  <h1 className="rounded-full h-10 w-10 text-xl bg-zinc-400/25 p-2 items-center justify-center ">
                    🚀
                  </h1>
                </div>
                <h2 className="text-xl text-zinc-400 font-semibold tracking-tight">
                  ChatGPT Prompts
                </h2>
              </div>
            </div>

            <div className="relative ">
              <ScrollArea className=" ">
                <div className=" space-y-4 py-5 pl-20 ">
                  <div className=" flex space-x-2">
                    <h1 className="text-lg text-zinc-400  font-semibold tracking-tight">
                      ✏️
                    </h1>
                    <h1 className="text-lg text-zinc-400 border-b-2 border-b-[#ffd333] font-semibold tracking-tight">
                      Creative
                    </h1>
                  </div>
                  <div className="flex  space-x-2 items-start pl-10 py-5">
                    {/* bullet */}
                    <div>
                      <div className=" rounded p-1.5 bg-zinc-400" />
                    </div>
                    <p className="text-zinc-400 text-sm">
                      "I want you to act as a playwright. You will craft dynamic
                      and dramatic stage plays that captivate audiences and
                      evoke a range of emotions. You may choose any genre, such
                      as comedy, tragedy, melodrama, and so forth, but the
                      objective is to write something with compelling dialogue,
                      vibrant characters, and a suspenseful plot. My first
                      request is "I need to write a modern tragedy set in a
                      metropolitan city."
                    </p>
                  </div>
                </div>
                <div className=" space-y-4 py-5 pl-20 ">
                  <div className=" flex space-x-2">
                    <h1 className="text-lg text-zinc-400  font-semibold tracking-tight">
                      🎓
                    </h1>
                    <h1 className="text-lg text-zinc-400 border-b-2 border-b-[#ffd333] font-semibold tracking-tight">
                      Career
                    </h1>
                  </div>
                  <div className="flex  space-x-2 items-start pl-10 py-5">
                    {/* bullet */}
                    <div>
                      <div className=" rounded p-1.5 bg-zinc-400" />
                    </div>
                    <p className="text-zinc-400 text-sm">
                      "I want you to act as a playwright. You will craft dynamic
                      and dramatic stage plays that captivate audiences and
                      evoke a range of emotions. You may choose any genre, such
                      as comedy, tragedy, melodrama, and so forth, but the
                      objective is to write something with compelling dialogue,
                      vibrant characters, and a suspenseful plot. My first
                      request is "I need to write a modern tragedy set in a
                      metropolitan city."
                    </p>
                  </div>
                  <div className="flex  space-x-2 items-start pl-10 py-5">
                    {/* bullet */}
                    <div>
                      <div className=" rounded p-1.5 bg-zinc-400" />
                    </div>
                    <p className="text-zinc-400 text-sm">
                      "I want you to act as a playwright. You will craft dynamic
                      and dramatic stage plays that captivate audiences and
                      evoke a range of emotions. You may choose any genre, such
                      as comedy, tragedy, melodrama, and so forth, but the
                      objective is to write something with compelling dialogue,
                      vibrant characters, and a suspenseful plot. My first
                      request is "I need to write a modern tragedy set in a
                      metropolitan city."
                    </p>
                  </div>
                </div>
                <div className=" space-y-4 py-5 pl-20 ">
                  <div className=" flex space-x-2">
                    <h1 className="text-lg text-zinc-400  font-semibold tracking-tight">
                      📚
                    </h1>
                    <h1 className="text-lg text-zinc-400 border-b-2 border-b-[#ffd333] font-semibold tracking-tight">
                      Course Generation
                    </h1>
                  </div>
                  <div className="flex  space-x-2 items-start pl-10 py-5">
                    {/* bullet */}
                    <div>
                      <div className=" rounded p-1.5 bg-zinc-400" />
                    </div>
                    <p className="text-zinc-400 text-sm">
                      "I want you to act as a playwright. You will craft dynamic
                      and dramatic stage plays that captivate audiences and
                      evoke a range of emotions. You may choose any genre, such
                      as comedy, tragedy, melodrama, and so forth, but the
                      objective is to write something with compelling dialogue,
                      vibrant characters, and a suspenseful plot. My first
                      request is "I need to write a modern tragedy set in a
                      metropolitan city."
                    </p>
                  </div>
                  <div className="flex  space-x-2 items-start pl-10 py-5">
                    {/* bullet */}
                    <div>
                      <div className=" rounded p-1.5 bg-zinc-400" />
                    </div>
                    <p className="text-zinc-400 text-sm">
                      "I want you to act as a playwright. You will craft dynamic
                      and dramatic stage plays that captivate audiences and
                      evoke a range of emotions. You may choose any genre, such
                      as comedy, tragedy, melodrama, and so forth, but the
                      objective is to write something with compelling dialogue,
                      vibrant characters, and a suspenseful plot. My first
                      request is "I need to write a modern tragedy set in a
                      metropolitan city."
                    </p>
                  </div>
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>

            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4"></div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="comments"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Made for You
            </h2>
            <p className="text-sm text-muted-foreground">
              Your personal playlists. Updated daily.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Demo;
