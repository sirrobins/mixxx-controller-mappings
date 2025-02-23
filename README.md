# Mixxx-TheNextBeat-SX1
Personal Hardware Controller Mapping of TheNextBeat-SX1 for Mixxx OpenSource DJ Software 


A personal mod - not complete, especially LED's.

This is a follow-up of the post on the Mixxx forum

https://mixxx.discourse.group/t/help-with-the-next-beat-by-tiesto-controller-mapping/28518/1



## Requirements

Mixxx Version 2.4.1 https://www.mixxx.org/ and TheNextBeat SX1 https://thenextbeat.dj/en/the-next-beat-dj-products/the-next-beat-by-tiesto-sx1 

## Install

Place into your Mixxx 'controllers' folder (on macOS under [userhome]/Library/Application Support/Mixxx) - restart Mixxx and activate under Preferences/Controller/TheNextBeat SX1
#    Led?	Codes:      Button  DECK 		Control(Decimal) 	Control(Hexadecimal)

# BORDER
	LED					//TMPO-	#1 			84  				0x54
	LED					//TMPO-	#2 			86  				0x56
		
	LED				 	//TMPO+	#1			83  				0x53
	LED				 	//TMPO+	#2			85  				0x55
	
	LED				 	//CUE 	#1			59  				0x3B
	LED				 	//CUE 	#2			66  				0x42
	
	LED					//PLAY 	#1 			74  				0x4A
	LED				 	//PLAY 	#2			76  				0x4C
	
	
#    Led?	Codes:      Button  DECK 		Control(Decimal) 	Control(Hexadecimal)	Comments
	LED				 	//LOOP+	#1			80  				0x50
	LED				 	//LOOP+	#2			14  				0x0E
												
	LED				 	//ALOOP #1			81  				0x51
	LED				 	//ALOOP	#2			12  				0x0C
												
	LED				 	//LOOP-	#1 			100 				0x64
	LED				 	//LOOP-	#2			101 				0x65

# CENTRAL	

	LED				 	//SYNC 	#1			68  				0x44
	LED				 	//SYNC 	#2			70  				0x46
		
	LED	 				//FXON 	#1			67 					0x43 		
	LED	 				//FXON 	#2			69 					0x45
	
	LED					//PFL	#M 			13  				0x0D			Master Pre Fader Listening: Sends signal from Master output to headphones channel.
			
	NO 	 			  	//LoadTR#1 			75  				0x4B
	NO 	 			  	//LoadTR#2 			52  				0x34
	
	LED				 	//VINYLM#1			72  				0x48
	LED				 	//VINYLM#2			53  				0x35

	LED				 	//PFL	#1			64  				0x40			Pre Fader Listening: Send audio signal of Left/Right Deck to the headphones channel.
	LED				 	//PFL	#2			71  				0x47

	NO 	 			 	//SHIFT	#1 			51  				0x33
	NO 	 			 	//SHIFT	#2 			60  				0x3C





	
#   ####  		KNOBS 		 ###

#   LED  				KNOBS			DECK		Control (Decimal)		Control (HEX)
	NO	 				//FilterFX 		#1 			22						0x16  		
	NO	 				//FilterFX 		#2 			28						0x1c  
	
	NO	 				//EQ High 		#1 									0x10  		High Frequency / Musical Stem.
	NO	 				//EQ High 		#2 									0x11  	
	
	NO	 				//EQ Low 		#1 									0x14  		Low Frequency / Musical Stem.
	NO	 				//EQ Low 		#2 									0x15  	
	
	NO	 				//OutVOLUME		#1 									0x08  		Output Volume.
	NO	 				//OutVOLUME		#2 									0x09

	NO	 				//MasterGAIN	#Master 							0x08  		Master output volume
	
	NO	 				//Crossfader	#Master 							0x0a  		Mixes left and right deck audio.


#   ####  		KNOBS 		 ###

#   LED  				KNOBS			DECK		Control (Decimal)		Control (HEX)

	NO	 				//JogWTouch		#1 			22						0x4d  		Touch on jog wheel top surface
	NO	 				//JogWTouch 	#2 			28						0x4e  

	NO	 				//JogWTurn		#1 			22						0x19  		Jog turn (using jog sides)
	NO	 				//JogWTurn	 	#2 			28						0x18  