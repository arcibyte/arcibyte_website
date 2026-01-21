---
title: "Mi Experiencia con Arch: Por Qué Es Mi Distro Favorita"
pubDate: 2026-01-20
description: "Mi viaje desde el salto entre distros hasta encontrar mi hogar digital con Arch Linux—lo bueno, lo malo y los hermosos rices."
author: "Jhon Arciniegas"
image:
  url: "/img/blog/screen.png"
  alt: "Mi configuración de escritorio con Hyprland"
tags: ["Arch Linux", "Experiencia", "Linux"]
---

He usado muchas distribuciones de Linux a lo largo de los años. Fedora fue mi sistema principal por más de 2 años, y me sirvió bien. Pero siempre sentí que faltaba algo—quería *más control* sobre mi sistema. Había escuchado sobre Arch durante años, pero honestamente, parecía intimidante y seguía postergándolo.

![Mi Configuración de Hyprland](/img/blog/screen.webp)
*Mi entorno de escritorio actual usando Hyprland con mis propios dotfiles personalizados.*

Entonces me topé con los "rices"—esas configuraciones de Arch magníficas y altamente personalizadas que la gente comparte en línea. Quedé enganchado. *Necesitaba* tener el mío propio. Así que me sumergí en la Arch Wiki, pasé demasiadas horas probando en máquinas virtuales y finalmente di el salto.

### Lo Que Realmente Me Convenció: Tiling Window Managers

Seamos honestos—los **Tiling Window Managers (TWMs)** fueron el empujón final. Ver esas elegantes configuraciones de Hyprland en todas partes me hizo darme cuenta de lo que me estaba perdiendo. Comencé con una configuración de arranque dual, manteniendo Windows para cosas de la universidad y por "si acaso" surgían problemas de compatibilidad.

Spoiler: rápidamente empecé a odiar iniciar en Windows. Después de algunos meses, lo eliminé por completo. ¿Para qué mantener algo que nunca usaba?

Ha pasado más de un año desde entonces. He construido mis propios [dotfiles](https://github.com/arcibyte/hypr-dotfiles) y actualmente estoy usando una configuración fuertemente inspirada en [el trabajo de JaKooLit](https://github.com/JaKooLit/Arch-Hyprland)—con mis propios toques personales, por supuesto.

**Nota:** Mis dotfiles están en fase beta por ahora, pero planeo compartir la configuración completa una vez que estén más estables.

![Información del Sistema Arch](/img/blog/arch.webp)
*Mi configuración de Arch funcionando sin problemas—neofetch nunca envejece.*

### Mi Configuración: Las Piezas Que Lo Hacen Funcionar

Una de las mejores partes de Arch es elegir cada componente tú mismo. Esto es lo que estoy usando:

* **Gestor de Ventanas:** Hyprland (compositor de Wayland—animaciones suaves, perfección en mosaico)
* **Terminal:** Kitty (acelerada por GPU, rápida y se ve hermosa)
* **Shell:** Zsh con Oh My Zsh (el autocompletado y la integración con git salvan vidas)
* **Lanzador de Aplicaciones:** Rofi (rápido, personalizable, hace exactamente lo que necesito)
* **Gestor de Archivos:** Thunar para GUI, ranger para terminal
* **Barra de Estado:** Waybar (muestra todo de un vistazo)
* **Daemon de Notificaciones:** Dunst (notificaciones limpias y minimalistas)
* **Editor:** Neovim (porque una vez que aprendes los movimientos de Vim, no hay vuelta atrás)

Cada pieza es algo que *yo* elegí. Esa es la experiencia de Arch.

### Por Qué Arch Simplemente *Funciona* Para Mí

#### 1. Control Completo (Cero Bloatware)

Instalas *exactamente* lo que necesitas. Nada más, nada menos. Es como construir tu propia PC personalizada versus comprar una preensamblada cargada de software que nunca tocarás. El sistema es tuyo, y se nota.

#### 2. El AUR es un Cambio de Juego

El **Arch User Repository (AUR)** es genuinamente una de las mejores cosas sobre Arch. ¿Necesitas una aplicación de nicho? Probablemente esté ahí. La instalación es ridículamente fácil con ayudantes como `yay`:

```bash
# Eso es todo. En serio.
yay -S visual-studio-code-bin
```

#### 3. Rolling Releases y Documentación Increíble

Se acabó el temor a las actualizaciones de versión mayores o reinstalar tu sistema operativo cada par de años. Con el modelo de rolling release de Arch, todo se mantiene actualizado:

```bash
yay -Syu
```

Y cuando algo inevitablemente se rompe (llegaremos a eso), la **Arch Wiki** te respalda. Es sin duda la mejor documentación de Linux que existe—detallada, actualizada y realmente útil.

### Las Desventajas (Porque Nada es Perfecto)

No lo endulcemos: **Arch puede romperse.** Si actualizas paquetes a ciegas o instalas cosas sin leer, *terminarás* con un sistema que no arranca. He tenido que rescatar mi instalación desde una memoria USB más de una vez:

```bash
mount /dev/nvme0n1p2 /mnt
arch-chroot /mnt
pacman -Syu
```

#### Los Desafíos Reales

* **Instalación:** Incluso con `archinstall`, sigue siendo mucho más intimidante que insertar un USB de Ubuntu y hacer clic en "Siguiente" varias veces.
* **Peculiaridades de hardware:** Los controladores propietarios—especialmente NVIDIA—pueden ser una pesadilla para configurar correctamente.
* **Inversión de tiempo:** Conseguir que todo esté *justo como lo quieres* toma días (a veces semanas) de ajustes, investigación y resolución de problemas.

### ¿Deberías Usar Arch?

Si disfrutas trastear, quieres entender cómo funciona Linux realmente y no te importa leer documentación, **definitivamente dale una oportunidad.** Es gratificante de una manera que otras distros simplemente no lo son.

Para mí, Arch se convirtió en mi hogar digital. Genuinamente no puedo imaginar volver a cambiar a otra cosa.

Bueno... a menos que sea NixOS. He estado leyendo sobre configuración declarativa últimamente, y la idea de un sistema completamente reproducible suena increíblemente tentadora. Pero esa es una madriguera completamente diferente para otro post.

Por cierto, uso Arch. 😎
