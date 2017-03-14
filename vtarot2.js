// JavaScript Document
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        alert("here");
    }, 10);
}
function cardFunction() {
	var a = Math.floor((Math.random() * 10) + 1); 
	document.getElementById("cardImage").src =  "Images\/" +a+".svg";
	document.getElementById("wordsbox").style.backgroundImage = urlBkimg;
if (a == '1') {
	document.getElementById("p1").innerHTML = "The Fool";
	document.getElementById("p2").innerHTML = "oracle";
	document.getElementById("p3").innerHTML = "With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him—its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one—all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it.";
	document.getElementById("p4").innerHTML = "Footnote";
	document.getElementById("p5").innerHTML = "Footnote";
	

	}

if (a == '2') {
	document.getElementById("p1").innerHTML = "The High Priestess";
	
	document.getElementById("p2").innerHTML = "Oracle = Live wisely, realize that nothing is permanent. Ground yourself in your inner sanctum. Incorporate spiritual practices (yoga, reading, praying, meditating). Follow your clear head and listen to your intuition.";
	
	document.getElementById("p3").innerHTML = "She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to show that some things are implied and some spoken. She is seated between the white and black pillars—J. and B.—of the mystic Temple and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light—a shimmering radiance. She has been called Occult Science on the threshhold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God (Nature) and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother.";
		document.getElementById("p4").innerHTML = "In a manner, she is also the Supernal Mother herself—that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah—the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is Malkuth—that world being, for this purpose, understood as a blessed Kingdom—that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana.";
		
		document.getElementById("p5").innerHTML = "Footnote";
} 

if (a == 3) {
	document.getElementById("p1").innerHTML = "The Empress";
	
	document.getElementById("p2").innerHTML = "Oracle = Live wisely, realize that nothing is permanent. Ground yourself in your inner sanctum. Incorporate spiritual practices (yoga, reading, praying, meditating). Follow your clear head and listen to your intuition.";
	
	document.getElementById("p3").innerHTML = "A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The scepter which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation.";
		document.getElementById("p4").innerHTML = "In another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism—as, for example, its identification with the Word, Divine Nature, the Triad, and so forth.";
		
		document.getElementById("p5").innerHTML = "Footnote";
}

if (a == 4) {
	document.getElementById("p1").innerHTML = "The Emperor";
	
	document.getElementById("p2").innerHTML = "Oracle";
	
	document.getElementById("p3").innerHTML = "He has a form of the Crux ansata for his scepter and a globe in his left hand. He is crowned monarch—commanding, stately, seated on a throne, the arms of which are fronted by rams' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta.";
		document.getElementById("p4").innerHTML = "It should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify, also—and the male figure especially—the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are 'full of strange experience,' but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being—but this is fantasy.";
		document.getElementById("p5").innerHTML = "Footnote";
}

if (a == 5) {
	document.getElementById("p1").innerHTML = "The Hierophant";
	
	document.getElementById("p2").innerHTML = "Oracle";
	
	document.getElementById("p3").innerHTML = "He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a scepter terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connection that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested.";
		
		document.getElementById("p4").innerHTML = "He is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to show forth. He is not, as it has been thought, philosophy—except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression.";
		
		document.getElementById("p5").innerHTML = "Footnote";
}

if (a == 6) {
	document.getElementById("p1").innerHTML = "The Lovers";
	
	document.getElementById("p2").innerHTML = "Oracle";
	
	document.getElementById("p3").innerHTML = "The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire. This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. In a very high sense, the card is a mystery of the Covenant and Sabbath..";
		document.getElementById("p4").innerHTML = "The suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism.";
		
		document.getElementById("p5").innerHTML = "Footnote";
}

if (a == 7) {
	document.getElementById("p1").innerHTML = "The Chariot";
	
	document.getElementById("p2").innerHTML = "Oracle";
	
	document.getElementById("p3").innerHTML = "The Chariot, An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes—in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the Sphinx, and it is on this account that I have accepted the variation of Eliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.";
		document.getElementById("p4").innerHTML = "It is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood.";
		
		document.getElementById("p5").innerHTML = "Footnote";
}

if (a == 8) {
	document.getElementById("p1").innerHTML = "Strength";
	
	document.getElementById("p2").innerHTML = "Oracle";
	
	document.getElementById("p3").innerHTML = "A woman, over whose head there broods the same symbol of life which we have seen in the card of the Hierophant, is closing the jaws of a lion. The only point in which this design differs from the conventional presentations is that her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of Justice, which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. Fortitude, in one of its most exalted aspects, is connected with the Divine Mystery of Union; the virtue, of course, operates in all planes, and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation.";
		document.getElementById("p4").innerHTML = "The suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism.";
		
		document.getElementById("p5").innerHTML = "Footnote";
}

if (a == 9) {
	document.getElementById("p1").innerHTML = "The Hermit";
	
	document.getElementById("p2").innerHTML = "Oracle";
	
	document.getElementById("p3").innerHTML = "The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World. It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that 'where I am, you also may be.'";
		document.getElementById("p4").innerHTML = "It is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Eliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but—like the card itself—to the truth that the Divine Mysteries secure their own protection from those who are unprepared.";
		
		document.getElementById("p5").innerHTML = "Footnote";
}

if (a == 10) {
	document.getElementById("p1").innerHTML = "Wheel of Fortune";
	
	document.getElementById("p2").innerHTML = "Oracle";
	
	document.getElementById("p3").innerHTML = "In this symbol I have again followed the reconstruction of Eliphas Lévi, who has furnished several variants. It is legitimate—as I have intimated—to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel occupy the angles of the card, and the wheel itself follows other indications of Lévi in respect of Ezekiel's vision, as illustrative of the particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged with the letters of the Divine Name—to show that Providence is implied through all. But this is the Divine intention within, and the similar intention without is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism by stultifying the essential idea of stability amidst movement.";
		document.getElementById("p4").innerHTML = "Behind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, from the days of Lévi onward, the occult explanations of this card are—even for occultism itself—of a singularly fatuous kind. It has been said to mean principle, fecundity, virile honor, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane.";
		
		document.getElementById("p5").innerHTML = "Footnote";
}


 }
 
	



