# The World in One Image — 21 November 2026

An entry for make.fun's "Sum up 21 November's world news in one image" bounty.

## What it is

A newspaper front page that sums up Saturday, 21 November 2026, in a single
1024×1024 image. The lead story is Iran's strike on Bahrain and the attacks
on tankers in the Strait of Hormuz; the supporting stories are the capture of
FBI most-wanted cartel boss "El Chapo Isidro" in Mexico, the Russian missile
strike on Kryvyi Rih and the burning Russian cargo ship in the Gulf of
Finland, and the EU's proposed 3% tax on big tech. The "Also today" strip
covers the COP31 talks running into overtime, Bolsonaro's move to intensive
care, and the magnitude 5.8 earthquake in Qinghai, China.

Every fact on the page was checked against reporting published on 21 November
2026 (AP, Reuters, AFP, Al Jazeera).

## How it works

`main.ts` copies the pre-drawn `entry.png` into `$MAKEFUN_OUTPUT_DIR`,
after checking that the file is a real PNG and within the 1 MiB limit. The
image itself was composed with `make_image.py` (Pillow): every element,
including the tanker illustration and the story icons, is drawn flat in code
— no photographs or downloaded artwork are used.

## Files

- `entry.png` — the 1024×1024 front page
- `main.ts` — the entry program (Node 22, standard library only)
- `make_image.py` — the composer script (build asset, not needed at run time)
