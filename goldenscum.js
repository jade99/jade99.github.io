Game.registerMod('goldenscum', {
	init: function() {
		Game.Notify("Sugar Lump Auto SaveScum loaded!", "", [16, 5], 6);

		var autoScumLump = function() {
			var age = Date.now() - Game.lumpT;		
			if (age >= Game.lumpRipeAge) {
				Game.WriteSave();
				Game.Notify("Harvesting Lump!", "", [0, 0], 6);				
				Game.clickLump();

				if (Game.lumpCurrentType != 2) {
					Game.Notify("Lump is not Golden", "Reloading", [16, 5], 6);
					location.reload();
				} else {
					Game.Notify("Golden Lump Scummed", "", [29, 16], 6);
				}
			}
		}

		Game.registerHook('check', autoScumLump);
	}
});