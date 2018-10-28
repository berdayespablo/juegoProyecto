package com.proyecto.spring;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.proyecto.spring.model.Palabra;
import com.proyecto.spring.service.PalabraService;
@Controller
public class PalabraController {
	
	private PalabraService palabraService;
	
	@Autowired(required=true)
	@Qualifier(value="palabraService")
	public void setPalabraService(PalabraService ps){
		this.palabraService = ps;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String inicio(Model model) {
		model.addAttribute("palabra", new Palabra());
		model.addAttribute("listPalabras", this.palabraService.listPalabras());
		return "palabra";
	}
	
	@RequestMapping(value = "/palabras", method = RequestMethod.GET)
	public String listPalabras(Model model) {
		model.addAttribute("palabra", new Palabra());
		model.addAttribute("listPalabras", this.palabraService.listPalabras());
		return "palabra";
	}
	
	@RequestMapping(value= "/palabra/add", method = RequestMethod.POST)
	public String addPalabra(@ModelAttribute("palabra") Palabra p){
		if( (p.getId() != 0) ){
			this.palabraService.updatePalabra(p);
		}else{
			this.palabraService.addPalabra(p);	
		}
		
		return "redirect:/palabras";
		
	}
	
	@RequestMapping("/remove/{id}")
    public String removePalabra(@PathVariable("id") int id){
		
        this.palabraService.removePalabra(id);
        return "redirect:/palabras";
    }
 
    @RequestMapping("/edit/{id}")
    public String editPalabra(@PathVariable("id") int id, Model model){
        model.addAttribute("palabra", this.palabraService.getPalabraById(id));
        model.addAttribute("listPalabras", this.palabraService.listPalabras());
        return "palabra";
    }
	
}
