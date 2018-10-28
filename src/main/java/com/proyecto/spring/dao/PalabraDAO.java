package com.proyecto.spring.dao;

import java.util.List;

import com.proyecto.spring.model.Palabra;

public interface PalabraDAO {

	public void addPalabra(Palabra p);
	public void updatePalabra(Palabra p);
	public List<Palabra> listPalabras();
	public Palabra getPalabraById(int id);
	public Palabra getPalabraByName(String nombre);
	public void compruebaPalabra(String nombre);
	public void removePalabra(int id);
}
