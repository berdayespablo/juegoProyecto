package com.proyecto.spring.dao;

import java.util.Comparator;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.proyecto.spring.model.Palabra;

@Repository
public class PalabraDAOImpl implements PalabraDAO {
	
	private static final Logger logger = LoggerFactory.getLogger(PalabraDAOImpl.class);

	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sf){
		this.sessionFactory = sf;
	}

	@Override
	public void addPalabra(Palabra p) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(p);
		logger.info("Palabra guardada. Detalles de palabra="+p);
	}

	@Override
	public void updatePalabra(Palabra p) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(p);
		logger.info("Palabra actualizada. Detalles de palabra="+p);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Palabra> listPalabras() {
		Session session = this.sessionFactory.getCurrentSession();
		List<Palabra> palabrasList = session.createQuery("from Palabra").list();
		for(Palabra p : palabrasList){
			logger.info("Lista de palabras::"+p);
		}
		palabrasList.sort(Comparator.comparing(Palabra::getNombre));
		return palabrasList;
	}

	@Override
	public Palabra getPalabraById(int id) {
		Session session = this.sessionFactory.getCurrentSession();		
		Palabra p = (Palabra) session.load(Palabra.class, new Integer(id));
		logger.info("Palabra cargada. Detalles de palabra="+p);
		return p;
	}

	@Override
	public void removePalabra(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		Palabra p = (Palabra) session.load(Palabra.class, new Integer(id));
		if(null != p){
			session.delete(p);
		}
		logger.info("Palabra guardada. Detalles de palabra="+p);
	}

	@Override
	public Palabra getPalabraByName(String nombre) {
		Session session = this.sessionFactory.getCurrentSession();		
		Palabra p = (Palabra) session.load(Palabra.class, new String(nombre));
		logger.info("Palabra cargada. Detalles de palabra="+p);
		return p;
	}

	@Override
	public void compruebaPalabra(String nombre) {
		Session session = this.sessionFactory.getCurrentSession();		
		Palabra p = (Palabra) session.get(Palabra.class, new String(nombre));
		logger.info("Palabra cargada. Detalles de palabra="+p);
		
	}

}
