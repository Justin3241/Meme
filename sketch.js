let img;

function preload() {
 img = 
loadImage("Pepe.png");
}

function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255,0,0);
  strokeWeight(2);
 }

function draw() {
  console.log(mouseX + ", " + mouseY);
   //image(img,10,20,500,500);
  //background(220);
  
  
  //shirt
  beginShape();
  vertex(28,307);
  quadraticVertex(49,296,120,291);
  vertex(28,306);
  vertex(29,398);
  vertex(30,398);
  vertex(398,400);
  vertex(400,379);
  quadraticVertex(382,350,359,339);
  endShape();
  
  //shirtcollar
  beginShape();
  vertex(128,303);
  quadraticVertex(127,329,132,344);
  vertex(132,344);
  quadraticVertex(136,355,153,372);
  vertex(153,372);
  quadraticVertex(168,381,184,396);
  //vertex(140,320);
  //vertex(150,349);
  vertex(279,398);
  quadraticVertex(286,385);
  vertex(282,397);
  vertex(286,384);
  vertex(272,388);
  quadraticVertex(224,400,180,378);
  vertex(150,350);
  quadraticVertex(139,329,140,319);
  endShape();
  
  //head
  beginShape();
  vertex(140,316);
  quadraticVertex(99,245,120,288);
  vertex(94,218);
  quadraticVertex(100,173,130,141);
  vertex(151,127);
  quadraticVertex(182,111,192,100);
  vertex(221,66);
  quadraticVertex(250,42,287,56);
  quadraticVertex(309,74,331,107);
  quadraticVertex(349,117,362,110);
  vertex(396,100);
  endShape();
  
  //bottom-head
  beginShape();
  vertex(140,316);
  vertex(175,361);
  vertex(190,373);
  vertex(218,383);
  quadraticVertex(234,386,275,385);
  vertex(297,382);
  vertex(325,376);
  quadraticVertex(338,371,348,354);
  vertex(359,337);
  vertex(372,296);
  quadraticVertex(376,287,384,279);
  endShape();
  
  //hand
  beginShape();
  vertex(397,315);
  vertex(385,277);
  vertex(354,254);
  vertex(335,246);
  vertex(330,231);
  vertex(335,225);
  vertex(397,251);
  quadraticVertex(365,233,368,237);
  vertex(310,218);
  quadraticVertex(304,209,308,199);
  vertex(385,197);
  vertex(397,202);
  vertex(340,196);
  vertex(324,179);
  quadraticVertex(323,167,327,165);
  vertex(353,162);
  vertex(398,170);
  endShape();
  
  //upperlip
  beginShape();
  vertex(142,258);
  quadraticVertex(197,339,278,351);
  vertex(329,350);
  vertex(319,369);
  quadraticVertex(217,359,223,362);
  vertex(137,273);
  quadraticVertex(137,261,140,256);
  endShape();
  
  //bottomlip
  beginShape();
  vertex(144,285);
  quadraticVertex(142,300,159,325);
  vertex(191,355);
  vertex(216,368);
  vertex(227,376);
  vertex(312,377)
  vertex(318,369);
  endShape();
  
  //eyelid-left1
  beginShape();
  vertex(174,181);
  vertex(210,218);
  quadraticVertex(207,217,241,228);
  vertex(305,236);
  vertex(313,222);
  endShape();
  
  //eyelid-left2
  beginShape();
  vertex(316,194);
  vertex(316,158);
  vertex(311,126);
  endShape();
  
  //eyelid-right1
  beginShape();
  vertex(351,255);
  vertex(319,243);
  quadraticVertex(315,224,320,222);
  endShape();
  
  //eyelid-right2
  beginShape();
  vertex(325,195);
  vertex(327,185);
  endShape();
  
  //eyelid-right2
  beginShape();
  vertex(341,160);
  vertex(362,146);
  endShape();
  
  //eyelid-right3
  beginShape();
  vertex(343,161);
  vertex(363,144);
  endShape();
  
  //eyes-left
  beginShape();
  vertex(200,212);
  quadraticVertex(207,231,222,241);              
  quadraticVertex(278,265,288,237);
  endShape();
  
  //eyes-right
  beginShape();
  vertex(368,269);
  quadraticVertex(349,270,328,267)
  quadraticVertex(320,255,325,248);
  endShape();
  
  //pupil-right
  beginShape();
  vertex(356,260);
  quadraticVertex(356,262,351,265);
  vertex(341,264);
  quadraticVertex(332,260,334,254);
  endShape();
  
  //pupil-left
  beginShape();
  vertex(264,235);
  quadraticVertex(257,241,248,246);
  quadraticVertex(232,244,223,238);
  quadraticVertex(219,232,222,227);
  endShape();
  
  //wrinkle-bottomleft
  beginShape();
  vertex(196,308);
  quadraticVertex(215,304,221,300);
  quadraticVertex(234,288,245,288);
  endShape();
  
  //wrinkle-bottomright
  beginShape();
  vertex(315,334);
  vertex(307,321);
  quadraticVertex(303,319,301,308);
  quadraticVertex(298,302,303,299);
  endShape();
  
  //wrinkle-middleright
  beginShape();
  vertex(352,296);
  quadraticVertex(333,294,313,283);
  quadraticVertex(308,275,310,269);
  endShape();
  
  //wrinkle-middleleft
  beginShape();
  vertex(276,258);
  vertex(231,267);
  vertex(199,266);
  vertex(196,261);
  endShape();
  
  
  
  
  
      
  
}
  
  
