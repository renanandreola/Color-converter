function convertHSV() {
    var rgb = $("#rgbValue").val();
    var arrayRGB = rgb.split(',');
    var R = arrayRGB[0];
    var G = arrayRGB[1];
    var B = arrayRGB[2];

    R = parseInt(R);
    G = parseInt(G);
    B = parseInt(B);
    
    if(R < 0 || G < 0 || B < 0 || R > 255 || G > 255 || B > 255) {
        alert("VALORES RGB NECESSITAM ESTAR ENTRE 0 E 255!");
        $("#valueHSV").css('visibility', 'hidden');
        return;
    }

    if(R == 0 && G == 0 && B == 0) {
        $("#valueHSV").text('HSV = ' + 0 + ', ' + 0 + ', ' + 0);
        $("#valueHSV").css('visibility', 'visible');
        return;
    }

    var H = 0;
    var S = 0;
    var V = 0;

    R = R / 255; 
    G = G / 255; 
    B = B / 255;

    var MIN = Math.min(R, Math.min(G,B));
    var MAX = Math.max(R, Math.max(G,B));

    R >= B && G >=B ? H = 60 * ((G - B) / (MAX - MIN)) + 0 : console.log('')
    B > G && B > R ? H = 60 * ((G - B) / (MAX - MIN)) + 360 : console.log('')
    MAX == G ? H = 60 * ((B - R) / (MAX - MIN)) + 120 : console.log('')
    MAX == B ? H = 60 * ((R - G) / (MAX - MIN)) + 240 : console.log('')

    S = ((MAX - MIN) / (MAX));
    V = MAX;

    $("#valueHSV").text('HSV = ' + H.toFixed(0) + '°, ' + (S * 100).toFixed(2) + '%, ' + (V * 100).toFixed(2) + '%');
    $("#valueHSV").css('visibility', 'visible')
}

function convertCMYK() {
    var rgb = $("#rgbValue").val();
    var arrayRGB = rgb.split(',');

    var R = arrayRGB[0];
    var G = arrayRGB[1];
    var B = arrayRGB[2];

    R = parseInt(R);
    G = parseInt(G);
    B = parseInt(B);
    
    if(R < 0 || G < 0 || B < 0 || R > 255 || G > 255 || B > 255) {
        alert("VALORES RGB NECESSITAM ESTAR ENTRE 0 E 255!");
        $("#valueCMYK").css('visibility', 'hidden');
        return;
    }

    if(R == 0 && G == 0 && B == 0) {
        $("#valueCMYK").text('CMYK = ' + 0 + ', ' + 0 + ', ' + 0  + ', ' + 0);
        $("#valueCMYK").css('visibility', 'visible');
        return;
    }

    var C = 0;
    var M = 0;
    var Y = 0;
    var K = 0;

    R = R / 255; 
    G = G / 255; 
    B = B / 255;

    var MAX = Math.max(R,G,B);

    K = 1 - MAX;
    C = ((1 - R - K) / (1 - K));
    M = ((1 - G - K) / (1 - K));
    Y = ((1 - B - K) / (1 - K));

    $("#valueCMYK").text('CMYK = ' + (C * 100).toFixed(2) + '%, ' + (M * 100).toFixed(2) + '%, ' + (Y * 100).toFixed(2) + '%, ' + (K * 100).toFixed(2) + '%');
    $("#valueCMYK").css('visibility', 'visible')
}

function normalRGB() {
    var rgb = $("#rgbValue").val();
    var arrayRGB = rgb.split(',');

    var R = arrayRGB[0];
    var G = arrayRGB[1];
    var B = arrayRGB[2];

    R = parseInt(R);
    G = parseInt(G);
    B = parseInt(B);
    
    if(R < 0 || G < 0 || B < 0 || R > 255 || G > 255 || B > 255) {
        alert("VALORES RGB NECESSITAM ESTAR ENTRE 0 E 255!");
        $("#normalRGB").css('visibility', 'hidden');
        return;
    }

    if(R == 0 && G == 0 && B == 0) {
        $("#normalRGB").text('RGB = ' + 0 + ', ' + 0 + ', ' + 0);
        $("#normalRGB").css('visibility', 'visible');
        return;
    }

    var r = 0;
    var g = 0;
    var b = 0;
    
    var soma = R + G + B

    r = R / soma;
    g = G / soma;
    b = B / soma;

    if(!r || !g || !b) {
        alert("Não possível!");
        $("#normalRGB").css('visibility', 'hidden');
        return;
    } else {
        $("#normalRGB").text('RGB normalizado = ' + r.toFixed(2) + ', ' + g.toFixed(2) + ', ' + b.toFixed(2) + ' >>>> Somatório ' + (r+g+b));
        $("#normalRGB").css('visibility', 'visible');
    }
}

function grayRGB() {
    var rgb = $("#rgbValue").val();
    var arrayRGB = rgb.split(',');

    var R = arrayRGB[0];
    var G = arrayRGB[1];
    var B = arrayRGB[2];

    R = parseInt(R);
    G = parseInt(G);
    B = parseInt(B);
    
    if(R < 0 || G < 0 || B < 0 || R > 255 || G > 255 || B > 255) {
        alert("VALORES RGB NECESSITAM ESTAR ENTRE 0 E 255!");
        $("#grayRGB").css('visibility', 'hidden');
        return;
    }

    if(R == 0 && G == 0 && B == 0) {
        $("#grayRGB").text('RGB = ' + 0 + ', ' + 0 + ', ' + 0);
        $("#grayRGB").css('visibility', 'visible');
        return;
    }

    var GRAY = ((R + G + B) / (3));

    $("#grayRGB").text('RGB para escala cinza = ' + Math.round(GRAY));
    $("#grayRGB").css('visibility', 'visible');
}

function HSVconvertRGB() {
    var HSV = $("#hsvValue").val();
    var arrayHSV = HSV.split(',');

    var H = arrayHSV[0];
    var S = arrayHSV[1];
    var V = arrayHSV[2];

    H = parseInt(H);
    S = parseInt(S) / 100;
    V = parseInt(V) / 100;

    const calc = (num) => (num + H / 60) % 6;
    const calc2 = (num) => V * (1 - S * Math.max(0, Math.min(calc(num), 4 - calc(num), 1)));
    
    $("#HSVvalueRGB").text('RGB = ' + (255 * calc2(5)).toFixed(2) + ', ' + (255 * calc2(3)).toFixed(2)  + ', ' + (255 * calc2(1)).toFixed(2));
    $("#HSVvalueRGB").css('visibility', 'visible');
}

function CMYKconvertRGB() {
    var CMYK = $("#CMYKValue").val();
    var arrayCMYK = CMYK.split(',');
    
    var C = arrayCMYK[0];
    var M = arrayCMYK[1];
    var Y = arrayCMYK[2];
    var K = arrayCMYK[3];
    
    var R = 0;
    var G = 0;
    var B = 0;

    C = parseInt(C) / 100;
    M = parseInt(M / 100);
    Y = parseInt(Y) / 100;
    K = parseInt(K) / 100;

    R = 1 - Math.min(1, C * (1 - K) + K);
    G = 1 - Math.min(1, M * (1 - K) + K);
    B = 1 - Math.min(1, Y * (1 - K) + K);

    $("#CMYKvalueRGB").text('RGB = ' + (R * 255).toFixed(2) + ', ' + (G * 255).toFixed(2)  + ', ' + (B * 255).toFixed(2));
    $("#CMYKvalueRGB").css('visibility', 'visible');
} 