---
title: "My Arch Linux Experience: Why It's My Favorite Distro"
pubDate: 2026-01-20
description: "My journey from distro-hopping to finding my digital home with Arch Linux—the good, the bad, and the beautiful rices."
author: "Jhon Arciniegas"
image:
  url: "/img/blog/screen.png"
  alt: "My Hyprland desktop setup"
tags: ["Arch Linux", "Experience", "Linux"]
---

I've used a lot of Linux distributions over the years. Fedora was my daily driver for over 2 years, and it served me well. But I always felt like something was missing I wanted *more control* over my system. I'd heard about Arch for years, but honestly? It seemed intimidating, and I kept putting it off.

![My Hyprland Setup](/img/blog/screen.webp)
*My current desktop environment using Hyprland with my own customized dotfiles.*

Then I stumbled upon the "rices" those gorgeous, highly customized Arch setups people share online. I was hooked. I *needed* to have my own. So I dove into the Arch Wiki, spent way too many hours testing in virtual machines, and finally took the plunge.

### What Actually Convinced Me: Tiling Window Managers

Let's be real **Tiling Window Managers (TWMs)** were the final push. Seeing those sleek Hyprland setups everywhere made me realize I was missing out. I started with a dual boot setup, keeping Windows around for university stuff and "just in case" compatibility issues.

Spoiler: I quickly grew to hate booting into Windows. After a few months, I nuked it entirely. Why keep something I never used?

It's been over a year now. I've built my own [dotfiles](https://github.com/arcibyte/hypr-dotfiles) and I'm currently running a setup heavily inspired by [JaKooLit's work](https://github.com/JaKooLit/Arch-Hyprland)—with my own personal touches, of course.

**Note:** My dotfiles are in beta right now, but I plan to share the complete configuration once they're more stable.

![Arch System Info](/img/blog/arch.webp)
*My Arch setup running smoothly—neofetch never gets old.*

### My Setup: The Pieces That Make It Work

One of the best parts of Arch is choosing every component yourself. Here's what I'm running:

* **Window Manager:** Hyprland (Wayland compositor—smooth animations, tiling perfection)
* **Terminal:** Kitty (GPU accelerated, fast, and looks gorgeous)
* **Shell:** Zsh with Oh My Zsh (autocompletion and git integration are lifesavers)
* **App Launcher:** Rofi (quick, customizable, does exactly what I need)
* **File Manager:** Thunar for GUI, ranger for terminal
* **Status Bar:** Waybar (shows everything at a glance)
* **Notification Daemon:** Dunst (clean, minimal notifications)
* **Editor:** Neovim (because once you learn Vim motions, there's no going back)

Every single piece is something *I* chose. That's the Arch experience.

### Why Arch Just *Works* for Me

#### 1. Complete Control (Zero Bloat)

You install *exactly* what you need. Nothing more, nothing less. It's like building your own custom PC versus buying a prebuilt loaded with software you'll never touch. The system is yours, and it shows.

#### 2. The AUR is a Game Changer

The **Arch User Repository (AUR)** is genuinely one of the best things about Arch. Need a niche application? It's probably there. Installation is ridiculously easy with helpers like `yay`:

```bash
# That's it. Seriously.
yay -S visual-studio-code-bin
```

#### 3. Rolling Releases & Amazing Documentation

No more dreading major version upgrades or reinstalling your OS every couple of years. With Arch's rolling release model, everything stays current:

```bash
yay -Syu
```

And when something inevitably breaks (we'll get to that), the **Arch Wiki** has your back. It's hands down the best Linux documentation out there—detailed, updated, and actually helpful.

### The Downsides (Because Nothing's Perfect)

Let's not sugarcoat it: **Arch can break.** If you blindly update packages or install things without reading, you *will* end up with an unbootable system. I've had to rescue my install from a USB stick more than once:

```bash
mount /dev/nvme0n1p2 /mnt
arch-chroot /mnt
pacman -Syu
```

#### The Real Challenges

* **Installation:** Even with `archinstall`, it's still way more daunting than popping in an Ubuntu USB and clicking "Next" a few times.
* **Hardware quirks:** Proprietary drivers—especially NVIDIA—can be a nightmare to configure properly.
* **Time investment:** Getting everything *just right* takes days (sometimes weeks) of tweaking, researching, and troubleshooting.

### Should You Use Arch?

If you enjoy tinkering, want to understand how Linux actually works, and don't mind reading documentation, **absolutely give it a shot.** It's rewarding in a way that other distros just aren't.

For me, Arch became my digital home. I genuinely can't imagine switching back to something else.

Well... unless it's NixOS. I've been reading about declarative configuration lately, and the idea of a completely reproducible system sounds incredibly tempting. But that's a whole different rabbit hole for another post.

BTW, I use Arch. 😎
