---
layout: device
title: Samsung Q1b
manufacturer: Samsung
type: Tablet
image: Q1.jpg
spec-cpu: VIA C7-M (1 GHz)
spec-chipset: VIA VX700
spec-gpu: VIA Chromotion II IGP
spec-display: 7" 800x480 LCD, CCFL backlight
spec-touch: Resistive (USB eGalaxTouch)
spec-audio: Realtek HD Audio <br>
    Mono speaker, no microphones
spec-ram: 1 GB DDR2 SO-DIMM
spec-storage: 64 GB SSD in mSATA to IDE ZIF adapter
spec-wlan: 802.11 b/g Atheros Mini PCI card
spec-bt: 2.0 + EDR Broadcom
spec-wwan: Option 3G mPCIe modem
spec-battery: Original 3 cell Samsung <br>
    Aftermarket 6 cell battery
---

I got the Q1b and a broken Q1 together in the same lot.

## History

- Prior:
    - Both units must have been upgraded after 2007 to 1 GB of RAM
- Obtained: 03/01/2025
    - Price: 250 RON
    - Got two units:
        - Q1b - known working
        - Q1 - known not working
- Maintenance + Upgrades:
    - 03/01/2025
        - Install SSD
        - Repaste
        - Swap back cover with one from Q1 (side effect: wrong ID sticker on the back)
        - Swap original (to me) 1 GB Nanya RAM with 1 GB Samsung RAM from Q1

## Notes

### Q1b

- USB boot from device attached to external USB hub is very slow (likely stuck at USB 1.1 speeds), it's best to connect the USB device directly to the port
- USB touchscreen - TouchKit (eGalaxTouch)
    - works as an emulated USB mouse
    - works without drivers, but lacks calibration, also is not initialized all the time (probably not initialized from cold boot)

### Q1

- Unit is defective (does not turn on)
    - Southbridge seems to be burnt (has visible dark spot on the resin package)
    - Missing HDD + ZIF cable
    - RAM stick (Samsung 1 GB DDR2 SODIMM) was not inserted correctly
- Power circuit OK (charges battery)
