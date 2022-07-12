/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package upeu.ayllusinchi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author 51950
 */
@Controller
public class IndexController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("titulo", "Bienvenido a Thymeleaf");
        return "index";
    }
    
    @GetMapping("/sesion")
    public String indexSesion(Model model) {
        model.addAttribute("mensaje", "Sesion");
        return "sesiones/sesion";
    }
    
    @GetMapping("/cuerpo")
    public String indexCuerpo(Model model) {
        model.addAttribute("mensaje", "Cuerpo");
        return "cuerpos/cuerpo";
    }
}
