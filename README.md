# Mixxx-TheNextBeat-SX1
Personal Hardware Controller Mapping of TheNextBeat-SX1 for Mixxx OpenSource DJ Software 


A personal mod - not complete, especially LED's.

This is a follow-up of the post on the Mixxx forum

https://mixxx.discourse.group/t/help-with-the-next-beat-by-tiesto-controller-mapping/28518/1



## Requirements

Mixxx Version 2.4.1 https://www.mixxx.org/ and TheNextBeat SX1 https://thenextbeat.dj/en/the-next-beat-dj-products/the-next-beat-by-tiesto-sx1 

## Install

Place into your Mixxx 'controllers' folder (on macOS under [userhome]/Library/Application Support/Mixxx) - restart Mixxx and activate under Preferences/Controller/TheNextBeat SX1

# Controller specs
SX1 sends 0x90 for push and 0x80 status for all buttons in Deck A/B.
A different midi control code is sent by each button.
Shift button 1/2 does not change the midi control sent by the main button pressed.

#  TNB SX control code map:
BUTTONS:	

		DECK		Led?		Control(Decimal) 	Control(Hexadecimal)	Comment:
//TMPO-		#1 		LED	?		84  				0x54
//TMPO-		#2 		LED			86  				0x56
						
//TMPO+		#1		LED			83  				0x53
//TMPO+		#2		LED			85  				0x55
					
//CUE 		#1		LED			59  				0x3B
//CUE 		#2		LED			66  				0x42
					
//PLAY 		#1 		LED			74  				0x4A
//PLAY 		#2		LED			76  				0x4C
					
	
					
		DECK		Led?		Control(Decimal) 	Control(Hexadecimal)	Comment:					
//LOOP+		#1		LED			80  				0x50
//LOOP+		#2		LED			14  				0x0E
									
//ALOOP 	#1		LED			81  				0x51
//ALOOP		#2		LED			12  				0x0C
									
//LOOP-		#1 		LED			100 				0x64
//LOOP-		#2		LED			101 				0x65
					
					
		DECK		Led?		Control(Decimal) 	Control(Hexadecimal)	Comment:					
//SYNC 		#1		LED			68  				0x44
//SYNC 		#2		LED			70  				0x46
						
//FXON 		#1		LED	 		67 				0x43 		
//FXON 		#2		LED	 		69 				0x45
					
//PFL		#M 		LED			13  				0x0D			Master Pre Fader Listening: Sends signal from Master output to headphones channel.
						
//LoadTR	#1 		NO 	 		75  				0x4B
//LoadTR	#2 		NO 	 		52  				0x34
					
//VINYLM	#1		LED			72  				0x48
//VINYLM	#2		LED			53  				0x35
					
//PFL		#1		LED			64  				0x40			Pre Fader Listening: Send audio signal of Left/Right Deck to the headphones channel.
//PFL		#2		LED			71  				0x47
					
//SHIFT		#1 		NO 	 		51  				0x33
//SHIFT		#2 		NO 	 		60  				0x3C



KNOBS:
					DECK 		LED? 	Decimal		Control(Hexadecimal)		Comment:

//FilterFX 				#1 			NO		22			0x16  		
//FilterFX 				#2 			NO		28			0x1c  
	
//EQ High 				#1 			NO					0x10  	High Frequency / Musical Stem.
//EQ High 				#2 			NO					0x11  				
													
//EQ Low 				#1 			NO					0x14  	Low Frequency / Musical Stem.
//EQ Low 				#2 			NO					0x15  				
													
//OutVOLUME				#1 			NO					0x08  	Output Volume.
//OutVOLUME				#2 			NO					0x09			
													
//MasterGAIN				#Master			NO					0x08  	Master output volume
													
//Crossfader				#Master			NO					0x0a  	Mixes left and right deck audio.


JOG WHEELS:

ACTION			DECK	   LED	Control (Decimal)		Control (HEX)		Comment:
                                        
//JogWTouch		#1 		NO		22		0x4d  			Touch on jog wheel top surface
//JogWTouch 		#2 		NO		28		0x4e  
                                  
//JogWTurn		#1 		NO		22		0x19	  		Jog turn (using jog sides)
//JogWTurn	 	#2 		NO		28		0x18  
