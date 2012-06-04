package uk.co.mtford.jalp;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import uk.co.mtford.jalp.abduction.Result;
import uk.co.mtford.jalp.abduction.logic.instance.IInferableInstance;
import uk.co.mtford.jalp.abduction.logic.instance.PredicateInstance;
import uk.co.mtford.jalp.abduction.logic.instance.term.CharConstantInstance;
import uk.co.mtford.jalp.abduction.logic.instance.term.VariableInstance;
import uk.co.mtford.jalp.abduction.parse.program.ParseException;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import static org.junit.Assert.assertTrue;

/**
 * Created with IntelliJ IDEA.
 * User: mtford
 * Date: 02/06/2012
 * Time: 07:25
 * To change this template use File | Settings | File Templates.
 */
public class FactTest {

    JALPSystem system;

    public FactTest() {

    }

    @Before
    public void noSetup() {

    }

    @After
    public void noTearDown() {

    }

    /*

    likes(john,jane).

    Q = likes(X,Y)

    Expected result is X/john, Y/jane

     */
    @Test
    public void oneFactTest() throws IOException, ParseException, JALPException, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/fact/one-fact.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance likes = new PredicateInstance("likes",X,Y);
        query.add(likes);
        //List<Result> result = system.processQuery(query, JALPSystem.Heuristic.NONE);
        List<Result> result = system.generateDebugFiles(query,"debug/fact/one-fact");
        assertTrue(result.size() == 1);
        Result onlyResult = result.remove(0);
        JALP.reduceResult(onlyResult);
        assertTrue(onlyResult.getAssignments().get(Y).equals(new CharConstantInstance("jane")));
        assertTrue(onlyResult.getAssignments().get(X).equals(new CharConstantInstance("john")));
    }

    /*

   likes(john,jane).
   likes(bob,jane).

   Q = likes(X,Y)

   Expected result is {X/bob, Y/jane} or {X/john, Y/jane}

    */
    @Test
    public void twoFactTest() throws IOException, ParseException, JALPException, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/fact/two-fact.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance likes = new PredicateInstance("likes",X,Y);
        query.add(likes);
        List<Result> result = system.generateDebugFiles(query, "debug/fact/two-fact");
        assertTrue(result.size()==2);
        Result resultOne = result.remove(0);
        Result resultTwo = result.remove(0);
        JALP.reduceResult(resultOne);
        JALP.reduceResult(resultTwo);
        assertTrue(resultOne.getAssignments().get(X).equals(new CharConstantInstance("bob")));
        assertTrue(resultOne.getAssignments().get(Y).equals(new CharConstantInstance("jane")));
        assertTrue(resultTwo.getAssignments().get(X).equals(new CharConstantInstance("john")));
        assertTrue(resultTwo.getAssignments().get(Y).equals(new CharConstantInstance("jane")));
    }
}