import { Show } from "solid-js";
import { createRouteData, useRouteData } from "solid-start";
import { randomImageFromSub } from "../api/reddit";

export const routeData = () => createRouteData(async () => {
  const post = randomImageFromSub({ subReddit: "Catmemes" });
  return post;
});

export default function Home() {
  const post = useRouteData<typeof routeData>();

  return (
    <main class="text-center p-4">
      <Show when={post()?.image}>
        <h1 class="max-6-xs text-5xl text-gray-200 font-thin my-16">
          {post()?.title}
        </h1>
        <div class="flex justify-center">
          <img src={post()?.image as string} alt={post()?.raw} class="rounded-xl w-96" />
        </div>
        <p class="my-4">@ {post()?.author}</p>
        <p class="my-4 break-all"><a href={post()?.url} class="text-sky-500">View post</a></p>
      </Show>
    </main>
  );
}
