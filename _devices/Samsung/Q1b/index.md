---
title: Samsung Q1b
manufacturer: Samsung
type: Tablet
layout: device
---

## General Info

An UMPC from 2006

## Specs

### Q1b

-   CPU: VIA C7-M (1 GHz)
-   Chipset: VIA VX700 (one chip solution)
-   GPU: VIA Chromotion II IGP (integrated in chipset)
-   Display: 800x480 LCD, CCFL backlight
-   Touchscreen: USB Resistive TouchKit (eGalaxTouch)
-   Audio: Realtek HD Audio
    -   Mono speaker, no microphones
-   RAM: 1 GB
-   Storage:
    -   Upgrade: 32 GB SanDisk SSD installed in mSATA to IDE ZIF adapter
    -   Original: 60 GB Toshiba 1.8" IDE ZIF HDD
-   WLAN: Atheros Mini PCI card (odd half-height card)
-   Bluetooth: Broadcom/WIDCOMM
-   WWAN: Qualcomm card (removed to reduce power consumption)
-   Batteries:
    -   Original 3 cell Samsung battery (11.1v)
        -   03/01/2025: reports 76.9% health
    -   Aftermarket 6 cell battery (11.1v)
        -   Reports 100% health, likely not

## History

-   Prior:
    -   Both units must have been upgraded after 2007 to 1 GB of RAM
-   Obtained: 03/01/2025
    -   Price: 250 RON
    -   Got two units:
        -   Q1b - known working
        -   Q1 - known not working
-   Maintenance + Upgrades:
    -   03/01/2025
        -   Install SSD
        -   Repaste
        -   Swap back cover with one from Q1 (side effect: wrong ID sticker on the back)
        -   Swap original (to me) 1 GB Nanya RAM with 1 GB Samsung RAM from Q1

## Notes

### Q1b

-   USB boot from device attached to external USB hub is very slow (likely stuck at USB 1.1 speeds), it's best to connect the USB device directly to the port
-   USB touchscreen - TouchKit (eGalaxTouch)
    -   works as an emulated USB mouse
    -   works without drivers, but lacks calibration, also is not initialized all the time (probably not initialized from cold boot)

### Q1

-   Unit is defective (does not turn on)
    -   Southbridge seems to be burnt (has visible dark spot on the resin package)
    -   Missing HDD + ZIF cable
    -   RAM stick (Samsung 1 GB DDR2 SODIMM) was not inserted correctly
-   Power circuit OK (charges battery)
