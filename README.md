# Mixxx-TheNextBeat-SX1
Personal Hardware Controller Mapping of TheNextBeat-SX1 for Mixxx OpenSource DJ Software 


A personal mod - not complete, especially LED's.

This is a follow-up of the post on the Mixxx forum

https://mixxx.discourse.group/t/help-with-the-next-beat-by-tiesto-controller-mapping/28518/1



## Requirements

Mixxx Version 2.4.1 https://www.mixxx.org/ and TheNextBeat SX1 https://thenextbeat.dj/en/the-next-beat-dj-products/the-next-beat-by-tiesto-sx1 

## Install

Place into your Mixxx 'controllers' folder (on macOS under [userhome]/Library/Application Support/Mixxx) - restart Mixxx and activate under Preferences/Controller/TheNextBeat SX1

## NO LED 		midi.sendShortMsg(0x90, 75, 0x7f);  //LoadTr#1 	0x4B
## NO LED 		midi.sendShortMsg(0x90, 52, 0x7f);  //LoadTr#2 	0x34

## NO LED 		midi.sendShortMsg(0x90, 51, 0x7f);  //SHIFT	#1 	0x33
## NO LED 		midi.sendShortMsg(0x90, 60, 0x7f);  //SHIFT	#2 	0x3C

##				midi.sendShortMsg(0x90, 13, 0x7f);  //MASTER#M 	0x0D	

##				midi.sendShortMsg(0x90, 59, 0x7f); 	//CUE 	#1	0x3B
##				midi.sendShortMsg(0x90, 66, 0x7f); 	//CUE 	#2	0x42
		
##				midi.sendShortMsg(0x90, 67, 0x7f);  //FX 	#1 	0x43
##				midi.sendShortMsg(0x90, 69, 0x7f);  //FX 	#2 	0x45
		
##				midi.sendShortMsg(0x90, 68, 0x7f); 	//SYNC 	#1	0x44
##				midi.sendShortMsg(0x90, 70, 0x7f); 	//SYNC 	#2	0x46

##				midi.sendShortMsg(0x90, 72, 0x7f); 	//VINYL	#1	0x48
##				midi.sendShortMsg(0x90, 53, 0x7f); 	//VINYL	#2	0x35
		
##				midi.sendShortMsg(0x90, 64, 0x7f); 	//HPHONE#1	0x40
##				midi.sendShortMsg(0x90, 71, 0x7f); 	//HPHONE#2	0x47

##				midi.sendShortMsg(0x90, 74, 0x7f);  //PLAY 	#1 	0x4A
##				midi.sendShortMsg(0x90, 76, 0x7f); 	//PLAY 	#2	0x4C
		
##				midi.sendShortMsg(0x90, 84, 0x7f);  //TMPO-	#1 	0x54
##				midi.sendShortMsg(0x90, 86, 0x7f);  //TMPO-	#2 	0x56
		
##				midi.sendShortMsg(0x90, 83, 0x7f); 	//TMPO+	#1	0x53
##				midi.sendShortMsg(0x90, 85, 0x7f); 	//TMPO+	#2	0x55

##				midi.sendShortMsg(0x90, 80, 0x7f); 	//LOOP+	#1	0x50
##				midi.sendShortMsg(0x90, 14, 0x7f); 	//LOOP+	#2	0x0E
		
##				midi.sendShortMsg(0x90, 81, 0x7f); 	//ALOOP #1	0x51
##				midi.sendShortMsg(0x90, 12, 0x7f); 	//ALOOP	#2	0x0C

##				midi.sendShortMsg(0x90, 100, 0x7f);	//LOOP-	#1 	0x64
##				midi.sendShortMsg(0x90, 101, 0x7f);	//LOOP-	#2	0x65