package com.se.sample.service.impl;

import com.se.sample.model.Note;
import com.se.sample.repository.NoteRepository;
import com.se.sample.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    NoteRepository noteRepository;

    @Override
    public List<Note> findAll() {
      return  noteRepository.findAll();
    }
}
