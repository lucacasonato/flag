/**
colors of the progress flag

Red: #E40303.
Orange: #FF8C00.
Yellow: #FFED00.
Green: #008026.
Indigo: #24408E.
Violet: #732982.
Pink: #FFAFC8.
Blue: #74D7EE.
Brown: 613915
Black: 000000

l = blue
p = pink
w = white
b = brown
B = black
r = red
o = orange
y = yellow
g = green
i = indigo
v = violet
 */

const colors = {
  l: "#74D7EE",
  p: "#FFAFC8",
  w: "#FFFFFF",
  b: "#613915",
  B: "#000000",
  r: "#E40303",
  o: "#FF8C00",
  y: "#FFED00",
  g: "#008026",
  i: "#24408E",
  v: "#732982",
};

const progressFlag = `
lbbbbbBBBBBrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
lllbbbbbBBBBBrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
lllllbbbbbBBBBBrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
pplllllbbbbbBBBBBrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
pppplllllbbbbbBBBBBooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
wppppplllllbbbbbBBBBBooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
wwwppppplllllbbbbbBBBBBooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
wwwwwppppplllllbbbbbBBBBBooooooooooooooooooooooooooooooooooooooooooooooooooooooo
wwwwwwwppppplllllbbbbbBBBBByyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
wwwwwwwwwppppplllllbbbbbBBBBByyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
wwwwwwwwwwwppppplllllbbbbbBBBBByyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
wwwwwwwwwwwwwppppplllllbbbbbBBBBByyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
wwwwwwwwwwwwwppppplllllbbbbbBBBBBggggggggggggggggggggggggggggggggggggggggggggggg
wwwwwwwwwwwppppplllllbbbbbBBBBBggggggggggggggggggggggggggggggggggggggggggggggggg
wwwwwwwwwppppplllllbbbbbBBBBBggggggggggggggggggggggggggggggggggggggggggggggggggg
wwwwwwwppppplllllbbbbbBBBBBggggggggggggggggggggggggggggggggggggggggggggggggggggg
wwwwwppppplllllbbbbbBBBBBiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
wwwppppplllllbbbbbBBBBBiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
wppppplllllbbbbbBBBBBiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
pppplllllbbbbbBBBBBiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
pplllllbbbbbBBBBBvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
lllllbbbbbBBBBBvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
lllbbbbbBBBBBvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
lbbbbbBBBBBvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
`;

/**
 * Print the progress flag to the terminal with a size of 24x80 characters.
 */
export function printProgress() {
  const flag = progressFlag.trim();
  const lines = flag.split("\n");
  for (const line of lines) {
    let print = "";
    const csses = [];
    for (const char of line) {
      const color = colors[char as keyof typeof colors];
      print += `%c %c`;
      csses.push(`background-color: ${color}`, "");
    }
    console.log(print, ...csses);
  }
}

if (import.meta.main) {
  printProgress();
}
