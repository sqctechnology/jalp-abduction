package uk.co.mtford.jalp;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import uk.co.mtford.jalp.abduction.Result;
import uk.co.mtford.jalp.abduction.logic.instance.IInferableInstance;
import uk.co.mtford.jalp.abduction.logic.instance.IUnifiableAtomInstance;
import uk.co.mtford.jalp.abduction.logic.instance.PredicateInstance;
import uk.co.mtford.jalp.abduction.logic.instance.term.CharConstantInstance;
import uk.co.mtford.jalp.abduction.logic.instance.term.ConstantInstance;
import uk.co.mtford.jalp.abduction.logic.instance.term.IntegerConstantInstance;
import uk.co.mtford.jalp.abduction.logic.instance.term.VariableInstance;
import uk.co.mtford.jalp.abduction.parse.program.ParseException;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import static org.junit.Assert.assertTrue;

/**
 * Created with IntelliJ IDEA.
 * User: mtford
 * Date: 06/06/2012
 * Time: 07:20
 * To change this template use File | Settings | File Templates.
 */
public class NegativeConstraintTest {

    JALPSystem system;

    public NegativeConstraintTest() {

    }

    @Before
    public void noSetup() {

    }

    @After
    public void noTearDown() {

    }

    /*
    p(X,Y) :- X in [1,2,3], Y in [1,2], X>Y, not X in [2].

    Q = P(X,Y)

    We expect two results: {X/3, Y/1}, {X/3,Y/2}
    */
    @Test
    public void inIntegerTest1() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/in-integer.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance q = new PredicateInstance("p",X,Y);
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/in-integer-1");
        assertTrue(result.size()==2);
        Result resultOne = result.get(0);
        Result resultTwo = result.get(1);
        JALP.reduceResult(resultOne);
        JALP.reduceResult(resultTwo);
        assertTrue(resultOne.getAssignments().get(X).equals(new IntegerConstantInstance(3)));
        assertTrue(resultOne.getAssignments().get(Y).equals(new IntegerConstantInstance(2)));
        assertTrue(resultTwo.getAssignments().get(X).equals(new IntegerConstantInstance(3)));
        assertTrue(resultTwo.getAssignments().get(Y).equals(new IntegerConstantInstance(1)));

    }

    /*
    p(X,Y) :- X in [1,2,3], Y in [1,2], X>Y, not X in [2].

    Q = P(two,Y).
    */
    @Test
    public void inIntegerTest2() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/in-integer.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        IntegerConstantInstance two = new IntegerConstantInstance(2);
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance q = new PredicateInstance("p",two,Y);
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/in-integer-2");
        assertTrue(result.size()==0);

    }

    @Test
    public void inConstantListTest1() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/in-constant-list.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        PredicateInstance q = new PredicateInstance("p",X);
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/in-constant-list-1");
        assertTrue(result.size()==1);
        Result resultOne = result.get(0);
        JALP.reduceResult(resultOne);
        assertTrue(resultOne.getAssignments().get(X).equals(new CharConstantInstance("bob")));
    }

    @Test
    public void inConstantListTest2() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/in-constant-list.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        PredicateInstance q = new PredicateInstance("p",new CharConstantInstance("mary"));
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/in-constant-list-2");
        assertTrue(result.size()==0);
    }

    @Test
      public void lessThanTest1() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/less-than.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance q = new PredicateInstance("p",X,Y);
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/less-than-1");
        assertTrue(result.size()==6);
        for (Result r:result) {
            JALP.reduceResult(r);
            IntegerConstantInstance XVal = (IntegerConstantInstance) r.getAssignments().get(X);
            IntegerConstantInstance YVal = (IntegerConstantInstance) r.getAssignments().get(Y);
            assertTrue(YVal.getValue()>=XVal.getValue());
        }
    }

    @Test
    public void lessThanEqTest1() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/less-than-eq.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance q = new PredicateInstance("p",X,Y);
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/less-than-eq-1");
        assertTrue(result.size()==3);
        for (Result r:result) {
            JALP.reduceResult(r);
            IntegerConstantInstance XVal = (IntegerConstantInstance) r.getAssignments().get(X);
            IntegerConstantInstance YVal = (IntegerConstantInstance) r.getAssignments().get(Y);
            assertTrue(YVal.getValue()>XVal.getValue());
        }
    }

    @Test
    public void greaterThanTest1() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/greater-than.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance q = new PredicateInstance("p",X,Y);
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/greater-than-1");
        assertTrue(result.size()==6);
        for (Result r:result) {
            JALP.reduceResult(r);
            IntegerConstantInstance XVal = (IntegerConstantInstance) r.getAssignments().get(X);
            IntegerConstantInstance YVal = (IntegerConstantInstance) r.getAssignments().get(Y);
            assertTrue(YVal.getValue()<=XVal.getValue());
        }
    }

    @Test
    public void greaterThanEqTest1() throws IOException, ParseException, Exception, uk.co.mtford.jalp.abduction.parse.query.ParseException {
        system = new JALPSystem("examples/constraint/negative/greater-than-eq.alp");
        List<IInferableInstance> query = new LinkedList<IInferableInstance>();
        VariableInstance X = new VariableInstance("X");
        VariableInstance Y = new VariableInstance("Y");
        PredicateInstance q = new PredicateInstance("p",X,Y);
        query.add(q);
        List<Result> result = system.generateDebugFiles(query, "debug/constraint/negative/greater-than-eq-1");
        assertTrue(result.size()==3);
        for (Result r:result) {
            JALP.reduceResult(r);
            IntegerConstantInstance XVal = (IntegerConstantInstance) r.getAssignments().get(X);
            IntegerConstantInstance YVal = (IntegerConstantInstance) r.getAssignments().get(Y);
            assertTrue(YVal.getValue()<XVal.getValue());
        }
    }


}