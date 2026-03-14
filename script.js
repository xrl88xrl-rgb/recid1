// Variables globales - FACTORES CLÍNICOS
let tipo_tumor = 0;      // 0-8 pts
let tn = 0;              // 0-8 (triple negativo)
let ki67 = 0;            // 0-6
let her2 = 0;            // 0-4
let grado = 0;           // 0-4
let tamano = 0;          // 0-4
let adeno = 0;           // 0-4 (adenopatías)
let receptores = 0;      // 0-4
let multifocal = 0;      // 0-3

// PERMEACIÓN
let pl = 0;              // 0-8 (permeación linfática)
let pv = 0;              // 0-7 (permeación vascular)

// MAMOGRAFÍA
let birads_m = 0;        // 0-6
let microcalc = 0;       // 0-4
let nodulo_esp = 0;      // 0-4
let distorsion = 0;      // 0-3
let densidad = 0;        // 0-3

// ECOGRAFÍA
let birads_us = 0;       // 0-6
let nodulo_hipo = 0;     // 0-4
let margenes_irreg = 0;  // 0-5
let vasc_aum = 0;        // 0-4
let adeno_ax = 0;        // 0-4
let sombra = 0;          // 0-2

// EDAD
let edad = 50;

// Inicializar listeners
document.addEventListener('DOMContentLoaded', function() {
    // ====================================================
    // FACTORES CLÍNICOS
    // ====================================================
    
    // Tipo de Tumor
    const tipoTumorSelect = document.getElementById('tipo_tumor');
    if (tipoTumorSelect) {
        tipoTumorSelect.addEventListener('change', function() {
            tipo_tumor = parseInt(this.value);
        });
    }
    
    // Triple Negativo
    document.querySelectorAll('input[name="tn"]').forEach(radio => {
        radio.addEventListener('change', function() {
            tn = parseInt(this.value);
        });
    });
    
    // Ki-67
    const ki67Select = document.getElementById('ki67');
    if (ki67Select) {
        ki67Select.addEventListener('change', function() {
            ki67 = parseInt(this.value);
        });
    }
    
    // HER2
    document.querySelectorAll('input[name="her2"]').forEach(radio => {
        radio.addEventListener('change', function() {
            her2 = parseInt(this.value);
        });
    });
    
    // Grado
    const gradoSelect = document.getElementById('grado');
    if (gradoSelect) {
        gradoSelect.addEventListener('change', function() {
            grado = parseInt(this.value);
        });
    }
    
    // Tamaño
    const tamanoSelect = document.getElementById('tamano');
    if (tamanoSelect) {
        tamanoSelect.addEventListener('change', function() {
            tamano = parseInt(this.value);
        });
    }
    
    // Adenopatías
    document.querySelectorAll('input[name="adeno"]').forEach(radio => {
        radio.addEventListener('change', function() {
            adeno = parseInt(this.value);
        });
    });
    
    // Receptores hormonales
    const receptoresSelect = document.getElementById('receptores');
    if (receptoresSelect) {
        receptoresSelect.addEventListener('change', function() {
            receptores = parseInt(this.value);
        });
    }
    
    // Multifocalidad
    document.querySelectorAll('input[name="multifocal"]').forEach(radio => {
        radio.addEventListener('change', function() {
            multifocal = parseInt(this.value);
        });
    });
    
    // ====================================================
    // PERMEACIÓN
    // ====================================================
    
    // Permeación linfática
    document.querySelectorAll('input[name="pl"]').forEach(radio => {
        radio.addEventListener('change', function() {
            pl = parseInt(this.value);
        });
    });
    
    // Permeación vascular
    document.querySelectorAll('input[name="pv"]').forEach(radio => {
        radio.addEventListener('change', function() {
            pv = parseInt(this.value);
        });
    });
    
    // ====================================================
    // MAMOGRAFÍA
    // ====================================================
    
    // BI-RADS Mamografía
    const biradsMSelect = document.getElementById('birads_m');
    if (biradsMSelect) {
        biradsMSelect.addEventListener('change', function() {
            birads_m = parseInt(this.value);
        });
    }
    
    // Microcalcificaciones
    document.querySelectorAll('input[name="microcalc"]').forEach(radio => {
        radio.addEventListener('change', function() {
            microcalc = parseInt(this.value);
        });
    });
    
    // Nódulo espiculado
    document.querySelectorAll('input[name="nodulo_esp"]').forEach(radio => {
        radio.addEventListener('change', function() {
            nodulo_esp = parseInt(this.value);
        });
    });
    
    // Distorsión arquitectural
    document.querySelectorAll('input[name="distorsion"]').forEach(radio => {
        radio.addEventListener('change', function() {
            distorsion = parseInt(this.value);
        });
    });
    
    // Densidad mamaria
    const densidadSelect = document.getElementById('densidad');
    if (densidadSelect) {
        densidadSelect.addEventListener('change', function() {
            densidad = parseInt(this.value);
        });
    }
    
    // ====================================================
    // ECOGRAFÍA
    // ====================================================
    
    // BI-RADS Ecografía
    const biradsUsSelect = document.getElementById('birads_us');
    if (biradsUsSelect) {
        biradsUsSelect.addEventListener('change', function() {
            birads_us = parseInt(this.value);
        });
    }
    
    // Nódulo hipoecoico
    document.querySelectorAll('input[name="nodulo_hipo"]').forEach(radio => {
        radio.addEventListener('change', function() {
            nodulo_hipo = parseInt(this.value);
        });
    });
    
    // Márgenes irregulares
    document.querySelectorAll('input[name="margenes_irreg"]').forEach(radio => {
        radio.addEventListener('change', function() {
            margenes_irreg = parseInt(this.value);
        });
    });
    
    // Vascularización aumentada
    document.querySelectorAll('input[name="vasc_aum"]').forEach(radio => {
        radio.addEventListener('change', function() {
            vasc_aum = parseInt(this.value);
        });
    });
    
    // Adenopatías axilares patológicas
    document.querySelectorAll('input[name="adeno_ax"]').forEach(radio => {
        radio.addEventListener('change', function() {
            adeno_ax = parseInt(this.value);
        });
    });
    
    // Sombra acústica posterior
    document.querySelectorAll('input[name="sombra"]').forEach(radio => {
        radio.addEventListener('change', function() {
            sombra = parseInt(this.value);
        });
    });
    
    // ====================================================
    // EDAD
    // ====================================================
    const edadSlider = document.getElementById('edad');
    if (edadSlider) {
        edadSlider.addEventListener('input', function() {
            edad = parseInt(this.value);
            const edadValor = document.getElementById('edad-valor');
            if (edadValor) edadValor.textContent = edad;
        });
    }
});

function calcular() {
    let puntos = 0;
    
    // ====================================================
    // FACTORES CLÍNICOS (30 pts)
    // ====================================================
    puntos += tipo_tumor;  // 0-8
    puntos += tn;          // 0-8 (triple negativo)
    puntos += ki67;        // 0-6
    puntos += her2;        // 0-4
    puntos += grado;       // 0-4
    puntos += tamano;      // 0-4
    puntos += adeno;       // 0-4
    puntos += receptores;  // 0-4
    puntos += multifocal;  // 0-3
    
    // ====================================================
    // PERMEACIÓN (15 pts)
    // ====================================================
    puntos += pl;          // 0-8
    puntos += pv;          // 0-7
    
    // ====================================================
    // MAMOGRAFÍA (20 pts)
    // ====================================================
    puntos += birads_m;    // 0-6
    puntos += microcalc;   // 0-4
    puntos += nodulo_esp;  // 0-4
    puntos += distorsion;  // 0-3
    puntos += densidad;    // 0-3
    
    // ====================================================
    // ECOGRAFÍA (25 pts)
    // ====================================================
    puntos += birads_us;   // 0-6
    puntos += nodulo_hipo; // 0-4
    puntos += margenes_irreg; // 0-5
    puntos += vasc_aum;    // 0-4
    puntos += adeno_ax;    // 0-4
    puntos += sombra;      // 0-2
    
    // ====================================================
    // EDAD (0-? pts)
    // ====================================================
    if (edad < 40) puntos += 3;
    else if (edad > 70) puntos -= 4;
    else if (edad > 60) puntos -= 2;
    
    // Asegurar que la puntuación esté entre 0 y 100
    puntos = Math.max(0, Math.min(100, puntos));
    
    // Actualizar UI
    const puntosElement = document.getElementById('puntos');
    if (puntosElement) puntosElement.textContent = puntos;
    
    const riesgoTexto = document.getElementById('riesgo-texto');
    const probTexto = document.getElementById('prob-texto');
    const seguimiento = document.getElementById('seguimiento');
    
    if (!riesgoTexto || !probTexto || !seguimiento) return;
    
    // Clasificación de riesgo (4 niveles)
    if (puntos <= 25) {
        riesgoTexto.textContent = 'BAJO';
        riesgoTexto.style.color = '#2ecc71';
        probTexto.textContent = '< 10%';
        seguimiento.textContent = 'Control anual estándar';
    } else if (puntos <= 50) {
        riesgoTexto.textContent = 'MODERADO';
        riesgoTexto.style.color = '#f39c12';
        probTexto.textContent = '10 - 20%';
        seguimiento.textContent = 'Control semestral (alternar mamografía y ecografía)';
    } else if (puntos <= 75) {
        riesgoTexto.textContent = 'ALTO';
        riesgoTexto.style.color = '#e67e22';
        probTexto.textContent = '20 - 35%';
        seguimiento.textContent = 'Control trimestral + pruebas complementarias';
    } else {
        riesgoTexto.textContent = 'MUY ALTO';
        riesgoTexto.style.color = '#e74c3c';
        probTexto.textContent = '> 35%';
        seguimiento.textContent = 'Seguimiento intensivo multidisciplinario';
    }
}

function limpiar() {
    // Resetear radios a "No" (valor 0)
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (radio.value === '0') {
            radio.checked = true;
        } else if (radio.value !== '0' && radio.hasAttribute('checked')) {
            radio.checked = false;
        }
    });
    
    // Resetear selects a valor 0
    const selects = ['tipo_tumor', 'ki67', 'grado', 'tamano', 'birads_m', 
                     'densidad', 'birads_us', 'receptores'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        if (select) select.value = '0';
    });
    
    // Resetear edad
    const edadSlider = document.getElementById('edad');
    if (edadSlider) {
        edadSlider.value = 50;
        const edadValor = document.getElementById('edad-valor');
        if (edadValor) edadValor.textContent = '50';
    }
    
    // Resetear variables
    tipo_tumor = 0;
    tn = 0;
    ki67 = 0;
    her2 = 0;
    grado = 0;
    tamano = 0;
    adeno = 0;
    receptores = 0;
    multifocal = 0;
    pl = 0;
    pv = 0;
    birads_m = 0;
    microcalc = 0;
    nodulo_esp = 0;
    distorsion = 0;
    densidad = 0;
    birads_us = 0;
    nodulo_hipo = 0;
    margenes_irreg = 0;
    vasc_aum = 0;
    adeno_ax = 0;
    sombra = 0;
    edad = 50;
    
    // Resetear resultados
    const puntosElement = document.getElementById('puntos');
    if (puntosElement) puntosElement.textContent = '0';
    
    const riesgoTexto = document.getElementById('riesgo-texto');
    if (riesgoTexto) {
        riesgoTexto.textContent = 'BAJO';
        riesgoTexto.style.color = '#2ecc71';
    }
    
    const probTexto = document.getElementById('prob-texto');
    if (probTexto) probTexto.textContent = '< 10%';
    
    const seguimiento = document.getElementById('seguimiento');
    if (seguimiento) seguimiento.textContent = 'Control anual estándar';
}
