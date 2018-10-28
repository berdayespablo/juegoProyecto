package com.proyecto.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Entity bean with JPA annotations
 * Hibernate provides JPA implementation
 * @author Pablo Berdayes
 *
 */
@Entity
@Table(name="PALABRA")
public class Palabra {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String nombre;
	
	private String relaciones;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getRelaciones() {
		return relaciones;
	}

	public void setRelaciones(String relaciones) {
		this.relaciones = relaciones;
	}
	
	@Override
	public String toString(){
		return "id="+id+", nombre="+nombre+", relaciones="+relaciones;
	}
}
