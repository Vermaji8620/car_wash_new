/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,vue}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        backimage:
          "url('https://s3-alpha-sig.figma.com/img/1c60/58b2/728a6096f1bf12ee196f7df618213707?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NgnAkcY3sWI50Mr0sXpi4YFX62XIEU0zkGKeYZLbC6Qs0eReVkMGPP3sZr9NnXy08RVGFAKs3peUWy~4~QBQ8QEtGnY0zmTqNjal446gUWGusriV2R88YHczFOEBQ~HXrx-JlKvLsRubts0wOuEMfmPiAYH-XIcO-t5aEl34KHFhuRUYrnDcrTEJ0T49h~aleFgIFBQ5XJlGUGX0lJYmDYKoYj4HX0xW~p5P2dFD8mZo4vcMWmnAce1gU0aWQ9jmDwWtIUUZJRoDei1tEThwJuS4Yd-gs-w2SsICd2nTdg0t0Iw5voFos7AzjpKrFRzE-8e6Xkv6MMi6NvA-yOHjLA__')",
        white_shade: 'url("./src/assets/shade_on_header.png")',
      }),
      fontFamily: {
        poppin: ["Poppins"],
      },
    },
  },
  plugins: [],
};
