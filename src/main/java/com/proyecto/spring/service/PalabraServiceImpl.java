package com.proyecto.spring.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.proyecto.spring.dao.PalabraDAO;
import com.proyecto.spring.model.Palabra;

@Service
public class PalabraServiceImpl implements PalabraService {
	
	private PalabraDAO palabraDAO;

	public void setPalabraDAO(PalabraDAO palabraDAO) {
		this.palabraDAO = palabraDAO;
	}

	@Override
	@Transactional
	public void addPalabra(Palabra p) {
		this.palabraDAO.addPalabra(p);
	}

	@Override
	@Transactional
	public void updatePalabra(Palabra p) {
		this.palabraDAO.updatePalabra(p);
	}

	@Override
	@Transactional
	public List<Palabra> listPalabras() {
		return this.palabraDAO.listPalabras();
	}

	@Override
	@Transactional
	public Palabra getPalabraById(int id) {
		return this.palabraDAO.getPalabraById(id);
	}

	@Override
	@Transactional
	public void removePalabra(int id) {
		this.palabraDAO.removePalabra(id);
	}

	@Override
	public Palabra getPalabraByName(String nombre) {
		return this.palabraDAO.getPalabraByName(nombre);
	}

	@Override
	public void compruebaPalabra(String nombre) {
		this.palabraDAO.compruebaPalabra(nombre);
		
	}

}
